import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import deosai from "./assets/deosai.jpg"; // replace with your real banner image
import pic2 from "./assets/pic2.avif"; // replace with your real team image

function AboutUs() {
  return (
    <div>
      <div
        className="position-relative text-center text-white"
        style={{
          backgroundImage: `url(${deosai})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100">
          <h4 className="fw-light mb-2">The Story</h4>
          <h1 className="display-4 fw-bold">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Best Travel Agency in Pakistan</h2>
        <hr className="mx-auto mb-5" style={{ width: "80px" }} />

        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={pic2}
              alt="Our Team"
              className="img-fluid rounded shadow"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          <div className="col-md-6">
            <p className="text-muted">
              <strong>Pakitan's Peaks and Plains</strong> is one of the best and most reliable tourism
              companies in Pakistan. To get into the traveling expedition, you’ve just got the right
              option. We take you higher to explore the surprising beauty of Pakistan. As a
              <span className="text-primary fw-semibold"> Pakistan tourism </span> company, we
              introduce the best opportunities to travel with enticing and super-comfy services.
              <br />
              <br />
              Don’t worry if you’re confused to find a trustworthy travel agency in Pakistan.
              You can check our client reviews — we are completely different from other travel
              companies. People trust our services blindly and spread our tour company to others.
              <br />
              <br />
              We arrange entertaining and exploratory journeys to your desired destinations.
              Whether you want to explore tourist hotspots or seek peaceful getaways, Pakistan
              Travel Places makes your tour brief yet memorable. Every client with multiple travel
              priorities is welcomed with warmth and hospitality.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-light py-4 text-center">
        <h5 className="fw-semibold text-secondary mb-0">
          “Travel with comfort, explore with confidence — Pakistan's Peaks And Plains.”
        </h5>
      </div>
    </div>
  );
}

export default AboutUs;
