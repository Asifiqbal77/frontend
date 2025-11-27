import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTours } from "./services/api";

function Tours() {
  const [tours, setTours] = useState([]);

  // Fixed locations for landing page
  const fixedLocations = [
    "hunza",
    "naran",
    "peshawar",
    "lahore",
    "multan",
    "swat",
    "murree",
    "chitral",
    "islamabad",
    // "karachi",
    // "neelum",
    // "asif"
  ];

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await getTours();
        setTours(res.data || []);
      } catch (error) {
        console.error("Error loading tours:", error);
      }
    }
    fetchTours();
  }, []);

  // Get one tour per fixed location
  const featuredTours = fixedLocations.map((loc) =>
    tours.find(
      (tour) =>
        String(tour.location || "").toLowerCase() === loc.toLowerCase()
    )
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">All Tours</h1>

      <div className="row">
        {featuredTours.map((tour, index) =>
          tour ? (
            <div className="col-md-4 mb-4" key={tour._id}>
              <div className="card shadow-sm">
                <img
                  src={`http://localhost:5000/${tour.images?.[0] || ""}`}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  alt="tour"
                />
                <div className="card-body">
                  <h5>{tour.name}</h5>
                  <p>{tour.description}</p>
                  <p>
                    <strong>{tour.price}</strong>
                  </p>
                  <Link
                    to={`/category/${String(tour.location || "").toLowerCase()}`}
                    className="btn btn-primary w-100"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <div
                  className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
                  style={{ height: "200px", color: "white" }}
                >
                  No Image
                </div>
                <div className="card-body">
                  <h5>{fixedLocations[index].toUpperCase()} Tours</h5>
                  <p>No tour added yet.</p>
                  <Link
                    to={`/category/${fixedLocations[index]}`}
                    className="btn btn-outline-primary w-100"
                  >
                    View Category
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Tours;