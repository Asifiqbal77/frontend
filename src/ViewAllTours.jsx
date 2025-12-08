import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTours, deleteTour as apiDeleteTour } from "./services/api";

function ViewAllTours() {
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
    badge: {
      backgroundColor: "#e9f5ec",
      color: "#28a745",
      fontSize: "0.75rem",
      padding: "0.3rem 0.75rem",
      borderRadius: "20px",
      fontWeight: 500,
    },
    iconBtn: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
    },
  };

  const [tours, setTours] = useState([]);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTours();
  }, []);

  async function fetchTours() {
    try {
      const res = await getTours();
      setTours(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load tours");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this tour?")) return;
    try {
      await apiDeleteTour(id);
      alert("Deleted");
      fetchTours();
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Failed to delete");
    }
  }

  const filtered = tours.filter((t) =>
    `${t.name} ${t.location}`.toLowerCase().includes(q.toLowerCase())
  );

  // helper to get full image src
  const getImageSrc = (tour) => {
    if (!tour) return "https://via.placeholder.com/150";
    const imgPath = (tour.images && tour.images.length > 0 && tour.images[0]) || tour.imageUrl || "";
    if (!imgPath) return "https://via.placeholder.com/150";
    // If the image already looks like a full URL, use it as-is
    if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) return imgPath;
    // Otherwise prefix backend host
    return `http://localhost:5000/${imgPath.replace(/^\/+/, "")}`;
  };

  return (
    <div className="container-fluid" style={styles.page}>
      <div className="card shadow-sm p-4" style={styles.cardRounded}>
        <h5 className="mb-1">All Tours</h5>
        <p className="text-muted small">View and manage all tour packages</p>

        <div className="input-group mb-4">
          <span className="input-group-text bg-white border-0" aria-hidden="true">
            <i className="bi bi-search text-muted" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search tours..."
            style={styles.input}
            aria-label="Search tours"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-borderless align-middle">
            <thead>
              <tr className="text-muted small">
                <th>Tour Name</th>
                <th>Location</th>
                <th>Duration</th>
                <th>Price (PKR)</th>
                <th>Max People</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((tour, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center">
                      {tour.images && tour.images.length > 0 ? (
                        <img
                          src={getImageSrc(tour)}
                          alt={tour.name}
                          style={{ width: 64, height: 48, objectFit: "cover", borderRadius: 6, marginRight: 12 }}
                        />
                      ) : (
                        <img
                          src={getImageSrc(tour)}
                          alt={tour.name}
                          style={{ width: 64, height: 48, objectFit: "cover", borderRadius: 6, marginRight: 12 }}
                        />
                      )}
                      <div>
                        <div className="fw-semibold">{tour.name}</div>
                        <div className="text-muted small">{(tour.description || "").slice(0, 50)}</div>
                      </div>
                    </div>
                  </td>
                  <td>{tour.location}</td>
                  <td>{tour.duration}</td>
                  <td>{tour.price}</td>
                  <td>{tour.maxPeople ?? "-"}</td>
                  <td>
                    <div className="d-flex gap-2">
                      {/* EDIT: navigate to existing /update route but pass the tour id in location.state
                          This keeps your current routes unchanged while allowing UpdateTour to receive the id */}
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => navigate("/update", { state: { id: tour._id } })}
                      >
                        <i className="bi bi-pencil me-1"></i> Edit
                      </button>

                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(tour._id)}>
                        <i className="bi bi-trash me-1"></i> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-muted">No tours found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewAllTours;