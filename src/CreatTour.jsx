import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTour } from "./services/api";

function CreateTour() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    location: "",
    duration: "",
    price: "",
    maxPeople: "",
    imageUrl: "",
    description: "",
  });

  // files state for optional image upload
  const [files, setFiles] = useState([]);

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f6f7f8",
      padding: "1.5rem",
    },
    cardRounded: {
      borderRadius: "12px",
    },
    input: {
      backgroundColor: "#f1f1f3",
      border: "none",
      padding: "0.75rem 1rem",
    },
    tabBtn: (active) => ({
      flex: 1,
      borderRadius: "12px",
      background: active ? "#fff" : "#e9ecef",
      border: "none",
      padding: "0.75rem",
      fontWeight: active ? "600" : "400",
    }),
    label: {
      fontWeight: 500,
      marginBottom: 4,
    },
    submitBtn: {
      background: "#000",
      color: "#fff",
      width: "100%",
      padding: "0.75rem",
      borderRadius: "8px",
      fontWeight: "600",
      border: "none",
    },
    smallMuted: {
      fontSize: "0.9rem",
      color: "#6c757d",
    },
    imagePreview: {
      maxWidth: "100%",
      borderRadius: 8,
      marginTop: ".5rem",
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    },
  };

  function updateField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate() {
    if (!form.name || !form.location) return "Name and Location are required.";
    if (form.price && Number(form.price) < 0) return "Price must be >= 0";
    if (form.maxPeople && Number(form.maxPeople) < 1) return "Max People must be >= 1";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      alert(err);
      return;
    }

    try {
      let payload;

      // If files selected -> use FormData with images field (backend multer expects 'images')
      if (files && files.length > 0) {
        payload = new FormData();
        payload.append("name", form.name.trim());
        payload.append("location", form.location.trim());
        payload.append("duration", form.duration.trim());
        payload.append("price", form.price);
        payload.append("maxPeople", form.maxPeople);
        payload.append("description", form.description.trim());
        // append files
        Array.from(files).forEach((file) => payload.append("images", file));
      } else {
        // No files -> send JSON; backend will use imageUrl if provided
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

      const res = await createTour(payload);
      alert(res.data.message || "Tour created");
      // navigate to manage page (you had navigate("/manage") commented out previously)
      navigate("/manage");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Failed to create tour");
    }
  }

  return (
    <div className="container-fluid" style={styles.page}>
      <div className="card shadow-sm p-4" style={styles.cardRounded}>
        <div className="d-flex align-items-center mb-2">
          <div>
            <h5 className="mb-1">Create New Tour</h5>
            <div style={styles.smallMuted}>Add a new tour package to your platform</div>
          </div>
        </div>

        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="tourName" style={styles.label}>
                Tour Name
              </label>
              <input
                id="tourName"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                type="text"
                className="form-control"
                style={styles.input}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="location" style={styles.label}>
                Location
              </label>
              <input
                id="location"
                value={form.location}
                onChange={(e) => updateField("location", e.target.value)}
                type="text"
                className="form-control"
                style={styles.input}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="duration" style={styles.label}>
                Duration
              </label>
              <input
                id="duration"
                value={form.duration}
                onChange={(e) => updateField("duration", e.target.value)}
                type="text"
                className="form-control"
                style={styles.input}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="price" style={styles.label}>
                Price (PKR)
              </label>
              <input
                id="price"
                value={form.price}
                onChange={(e) => updateField("price", e.target.value)}
                type="number"
                className="form-control"
                placeholder="1000000"
                style={styles.input}
                min="0"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="maxPeople" style={styles.label}>
                Max People
              </label>
              <input
                id="maxPeople"
                value={form.maxPeople}
                onChange={(e) => updateField("maxPeople", e.target.value)}
                type="number"
                className="form-control"
                style={styles.input}
                min="1"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="imageUrl" style={styles.label}>
                Image URL (optional)
              </label>
              <input
                id="imageUrl"
                value={form.imageUrl}
                onChange={(e) => updateField("imageUrl", e.target.value)}
                type="text"
                className="form-control"
                placeholder="hunza.jpg"
                style={styles.input}
              />
              <div className="form-text" style={styles.smallMuted}>
                Or upload image files below.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="images" style={styles.label}>
                Upload Images (optional)
              </label>
              <input
                id="images"
                multiple
                onChange={(e) => setFiles(e.target.files)}
                type="file"
                className="form-control"
                style={styles.input}
                accept="image/*"
              />
            </div>

            <div className="col-12">
              <label htmlFor="description" style={styles.label}>
                Description
              </label>
              <textarea
                id="description"
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                className="form-control"
                style={styles.input}
              />
            </div>
          </div>

          <div className="mt-4">
            <button type="submit" style={styles.submitBtn}>
              + Create Tour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateTour;