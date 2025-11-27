import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTours } from "./services/api";
import { Link } from "react-router-dom";

function CategoryPage() {
  // Route provides :location, but keep using "region" in the component logic
  const { location } = useParams();
  const region = location; // map to preserve your variable usage

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await getTours();

        // Filter by region (location field)
        const filtered = (res?.data || []).filter(
          (tour) =>
            String(tour.location || "").toLowerCase() ===
            String(region || "").toLowerCase()
        );

        setTours(filtered);
      } catch (error) {
        console.error("Error loading category:", error);
      }

      setLoading(false);
    }

    loadData();
  }, [region]);

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-capitalize mb-4">{region} Packages</h1>

      <div className="row">
        {tours.length === 0 ? (
          <p>No packages found for {region}.</p>
        ) : (
          tours.map((tour) => (
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
                    <Link to="/booking" className="btn btn-primary w-100">
                      Book Now
                      </Link>

                  {/* <button className="btn btn-primary w-100">Book Now</button> */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
