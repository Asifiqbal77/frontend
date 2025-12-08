import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getTourById, updateTour } from "./services/api";

function UpdateTour() {
  // Accept id from route param OR from location.state.id
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const idFromParams = params?.id;
  const idFromState = location?.state?.id;
  const id = idFromParams || idFromState; // prefer param if present

  const [form, setForm] = useState({
    name: "",
    location: "",
    duration: "",
    price: "",
    maxPeople: "",
    imageUrl: "",
    description: "",
  });

  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (id) fetchTour();
    // eslint-disable-next-line
  }, [id]);

  async function fetchTour() {
    try {
      const res = await getTourById(id);
      const t = res.data;
      // If images are stored as relative paths, keep only first as imageUrl
      const firstImage = (t.images && t.images.length > 0) ? t.images[0] : (t.imageUrl || "");
      setForm({
        name: t.name || "",
        location: t.location || "",
        duration: t.duration || "",
        price: t.price || "",
        maxPeople: t.maxPeople || "",
        imageUrl: firstImage,
        description: t.description || "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to load tour");
    }
  }

  function updateField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let payload;
      if (files && files.length > 0) {
        payload = new FormData();
        payload.append("name", form.name.trim());
        payload.append("location", form.location.trim());
        payload.append("duration", form.duration.trim());
        payload.append("price", form.price);
        payload.append("maxPeople", form.maxPeople);
        payload.append("description", form.description.trim());
        Array.from(files).forEach((file) => payload.append("images", file));
      } else {
        payload = {
          name: form.name.trim(),
          location: form.location.trim(),
          duration: form.duration.trim(),
          price: form.price,
          maxPeople: form.maxPeople,
          imageUrl: form.imageUrl.trim(),
          description: form.description.trim(),
        };
      }

      const res = await updateTour(id, payload);
      alert(res.data.message || "Tour updated");
      navigate("/manage");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Failed to update tour");
    }
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Update Tour</h5>
          <p className="text-muted">Select a tour to update from the form below</p>

          {!id ? (
            <div className="alert alert-warning">No tour selected to update. Please click Edit from the Manage Tours list.</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Tour Name</label>
                  <input className="form-control" value={form.name} onChange={(e) => updateField("name", e.target.value)} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <input className="form-control" value={form.location} onChange={(e) => updateField("location", e.target.value)} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Duration</label>
                  <input className="form-control" value={form.duration} onChange={(e) => updateField("duration", e.target.value)} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Price (PKR)</label>
                  <input type="number" className="form-control" value={form.price} onChange={(e) => updateField("price", e.target.value)} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Max People</label>
                  <input type="number" className="form-control" value={form.maxPeople} onChange={(e) => updateField("maxPeople", e.target.value)} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Image URL (or upload)</label>
                  <input className="form-control" value={form.imageUrl} onChange={(e) => updateField("imageUrl", e.target.value)} />
                  <div className="form-text">If you upload files below they will replace current images.</div>
                </div>

                <div className="col-12">
                  <label className="form-label">Upload Images (optional)</label>
                  <input type="file" multiple className="form-control" onChange={(e) => setFiles(e.target.files)} />
                </div>

                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" value={form.description} onChange={(e) => updateField("description", e.target.value)} />
                </div>
              </div>

              <div className="mt-3">
                <button className="btn btn-primary" type="submit">Save Changes</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdateTour;
