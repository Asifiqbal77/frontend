import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function UpdateTour() {
  const tours = [
    {
      name: "Hunza Valley Tour",
      location: "Hunza Valley, Gilgit-Baltistan",
      duration: "5 Days",
      price: "25,000",
    },
    {
      name: "Naran Kaghan Adventure",
      location: "Naran, Kaghan Valley",
      duration: "4 Days",
      price: "20,000",
    },
    {
      name: "Skardu Expedition",
      location: "Skardu, Gilgit-Baltistan",
      duration: "7 Days",
      price: "35,000",
    },
  ];

  function handleEdit(tourName) {
    alert(`Edit clicked for ${tourName}`);
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Update Tour</h5>
          <p className="text-muted">Select a tour to update from the table below</p>

          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Tour Name</th>
                  <th>Location</th>
                  <th>Duration</th>
                  <th>Price (PKR)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tours.map((tour, index) => (
                  <tr key={index}>
                    <td>{tour.name}</td>
                    <td>{tour.location}</td>
                    <td>{tour.duration}</td>
                    <td>{tour.price}</td>
                    <td>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleEdit(tour.name)}
                      >
                        <i className="bi bi-pencil me-1"></i> Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateTour;
