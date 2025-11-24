import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTourById } from "./services/api";

function NaranPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    async function fetchTour() {
      try {
        if (id) {
          const res = await getTourById(id);
          setTour(res.data);
        }
      } catch (err) {
        alert("Failed to fetch tour");
      }
    }
    fetchTour();
  }, [id]);

  const handleClick = () => {
    navigate("/booking");
  };

  if (!tour) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h2 className="h4 mb-10" style={{ fontWeight: 600 }}>{tour.name}</h2>
      <p className="mb-4">{tour.description}</p>
      <div className="row">
        {tour.images && tour.images.map((img, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm" style={{ width: "100%", height: "420px" }}>
              <img
                src={tour.images[0] ? `http://localhost:5000/${tour.images[0]}` : "https://via.placeholder.com/200"}
                className="card-img-top"
                alt={tour.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{tour.name}</h5>
                  <p className="card-text">{tour.description}</p>
                </div>
                <div>
                  <h6 className="text-primary mb-3">{tour.price}</h6>
                  <button className="btn btn-primary w-100" onClick={handleClick}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NaranPage;