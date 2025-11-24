import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    setForm((form) => ({ ...form, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      alert(err);
      return;
    }

    // Build tour object - replace this with an API call to save on server
    const newTour = {
      name: form.name.trim(),
      location: form.location.trim(),
      duration: form.duration.trim(),
      price: Number(form.price),
      maxPeople: Number(form.maxPeople),
      imageUrl: form.imageUrl.trim(),
      description: form.description.trim(),
      createdAt: new Date().toISOString(),
    };

    
    // console.log("Creating tour:", newTour);
    // alert("Tour created (demo). Check console for object.");
    // navigate("/manage");
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
                Image URL
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
                // rows="3"
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