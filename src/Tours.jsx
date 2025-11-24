import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTours } from "./services/api";

function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await getTours();
        setTours(res.data);
      } catch (err) {
        alert("Failed to fetch tours");
      }
    }
    fetchTours();
  }, []);

  return (
    <section className="container mt-5">
      <div
  className="d-flex justify-content-between align-items-center mb-3"
  style={{ backgroundColor: "#556B2F", padding: "10px", borderRadius: "6px" }}
>
  <h2 className="h4 mb-0">Pakistan Tours in Exotic Holiday Destinations</h2>
</div>
      {/* <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">Pakistan Tours in Exotic Holiday Destinations</h2>
      </div> */}
      <div className="row">
        {tours.map((tour, idx) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={tour._id ?? idx}>
            <div className="card" style={{ width: "100%", height: "380px" }}>
              <img
                src={tour.images[0] ? `http://localhost:5000/${tour.images[0]}` : "https://via.placeholder.com/200"}
                className="card-img-top"
                alt={tour.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{tour.name}</h5>
                  <p className="card-text">{tour.description}</p>
                </div>
                  <Link to={`/${tour.name.toLowerCase().replace(/\s/g, "")}/${tour._id}`} className="btn btn-primary mt-2">
                  More Details
                  </Link>
                {/* <Link to={`/hunza/${tour._id}`} className="btn btn-primary mt-2">
                  More Details
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Tours;