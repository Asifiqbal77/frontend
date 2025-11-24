import React from "react";


import pic1 from "./assets/pic1.avif";
import pic2 from "./assets/pic2.avif";
import kar1 from "./assets/kar1.avif";
import swat from "./assets/swat.avif";
import isl1 from "./assets/isl1.avif";
import lah1 from "./assets/lah1.avif";
import pesh1 from "./assets/pesh1.jpeg";
import kalam from "./assets/kalam.png";
import deosai from "./assets/deosai.jpg";
// import mur1 from "./assets/mur1.png";
import nar1 from "./assets/nar1.gif";
import mult1 from "./assets/mult1.jpg";

function Destinations() {
  const places = [
    {
      image: pic1,
      title: "Autumn Tour to Skardu, Deosai Plains & Khaplu",
      meta: "8 Days (7 Nights)",
      price: "Rs20,500",
      badge: "Public Tours",
    },
    {
      image: pic2,
      title: "4 Days Trip to Kalash & Chitral Valley",
      meta: "4 Days (3 Nights)",
      price: "Rs14,500",
      badge: "Public Tour",
    },
    {
      image: kar1,
      title: "2 Days Trip to Karachi",
      meta: "2 Days (1 Night)",
      price: "Rs9,500",
      badge: "Upcoming",
    },
    {
      image: swat,
      title: "Swat Valley Mini Break",
      meta: "3 Days (2 Nights)",
      price: "Rs12,200",
      badge: "Public Tour",
    },
    {
      image: lah1,
      title: "Lahore Cultural Escape",
      meta: "1 Day",
      price: "Rs2,500",
      badge: "Public Tour",
    },
    {
      image: isl1,
      title: "Islamabad Nature Walk",
      meta: "1 Day",
      price: "Rs4,500",
      badge: "Upcoming",
    },
    {
      image: pesh1,
      title: "The city of Flowers, Peshawar",
      meta: "3 Day",
      price: "Rs5,500",
      badge: "Nextweek",
    },
    {
      image: kalam,
      title: "beautyful kalam toure",
      meta: "5 Days (4 Nights)",
      price: "Rs15,500",
      badge: "Public Tours",
    },
    {
      image: deosai,
      title: "spring Tour to deosai",
      meta: "2 Days (1 Nights)",
      price: "Rs3,500",
      badge: "Public Tours",
    },
    // {
    //   image: mur1,
    //   title: "Murree Snow season",
    //   meta: "2 Days (1 Nights)",
    //   price: "Rs5000",
    //   badge: "Public Tours",
    // },
    {
      image: nar1,
      title: "Naran, Kaghan tour",
      meta: "2 Days (1 Nights)",
      price: "Rs5000",
      badge: "Public Tours",
    },
    {
      image: mult1,
      title: "MUltan toure",
      meta: "5 Days (4 Nights)",
      price: "Rs10,500",
      badge: "Public Tours",
    },
  ];

  return (
    <section className="container py-4">
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">Upcoming Tours</h2>
        <a href="#all" className="text-primary small">View All Upcoming Packages</a>
      </div>

     
      <div className="row g-4">
        {places.map((p, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-12">
           
            <div className="card h-100 shadow-sm border-0">
             
              <div className="position-relative">
                <div className="ratio ratio-4x3">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="card-img-top w-100 h-100 object-fit-cover"
                    loading="lazy"
                  />
                </div>

                <span className="badge bg-success text-white fw-bold position-absolute" style={{ top: 12, left: 12 }}>
                  {p.badge}
                </span>
              </div>

              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h3 className="card-title h6 text-uppercase mb-0" style={{ lineHeight: 1.05 }}>
                    {p.title}
                  </h3>
                  <div className="text-primary fw-bold ms-2">{p.price}</div>
                </div>

                <div className="d-flex justify-content-between align-items-center border-top pt-2 small text-muted">
                  <span>⏰ {p.meta}</span>
                  <span className="text-secondary">As low as</span>
                </div>

                <div className="mt-3">
                  <div className="d-none d-md-flex justify-content-end">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      type="button"
                      onClick={() => alert(`Book: ${p.title}`)}
                    >
                      Book Now
                    </button>
                  </div>

                  <div className="d-flex d-md-none">
                    <button
                      className="btn btn-sm btn-outline-primary w-100"
                      type="button"
                      onClick={() => alert(`Book: ${p.title}`)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
