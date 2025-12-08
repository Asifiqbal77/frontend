import React, { useState } from "react";
import API from "./services/api";
import { useLocation } from "react-router-dom";

function Booking() {
  const loc = useLocation();
  const prefill = loc.state || {};

  const [form, setForm] = useState({
    name: prefill.customerName || "",
    email: prefill.customerEmail || "",
    address: "",
    address2: "",
    city: "",
    zip: "",
    tourId: prefill.tourId || "",
    tourName: prefill.tourName || "",
    amountCents: prefill.amountCents || "",
    currency: "pkr",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.tourId || !form.amountCents) {
      alert("Please fill required fields.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        amountCents: Number(form.amountCents), // PKR
        currency: "pkr",
        tourId: form.tourId,
        tourName: form.tourName,
        customerName: form.name,
        customerEmail: form.email,
        description: `Booking for ${form.tourName}`,
      };

      const res = await API.post("/payment/create-checkout-session", payload);

      if (res.data?.url) {
        window.location.href = res.data.url;
      } else {
        alert("Failed to start payment.");
      }
    } catch (err) {
      console.error(err);
      alert("Payment start failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="row g-3 mt-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label>Name</label>
        <input id="name" className="form-control" value={form.name} onChange={handleChange} />
      </div>

      <div className="col-md-6">
        <label>Email</label>
        <input id="email" type="email" className="form-control" value={form.email} onChange={handleChange} />
      </div>

      <div className="col-12">
        <label>Present Address</label>
        <input id="address" className="form-control" value={form.address} onChange={handleChange} />
      </div>

      <div className="col-12">
        <label>Permanent Address</label>
        <input id="address2" className="form-control" value={form.address2} onChange={handleChange} />
      </div>

      <div className="col-md-6">
        <label>City</label>
        <input id="city" className="form-control" value={form.city} onChange={handleChange} />
      </div>

      <div className="col-md-6">
        <label>Zip</label>
        <input id="zip" className="form-control" value={form.zip} onChange={handleChange} />
      </div>

      <div className="col-md-6">
        <label>Tour Name</label>
        <input id="tourName" className="form-control" value={form.tourName} onChange={handleChange} />
      </div>

      <div className="col-md-3">
        <label>Tour ID</label>
        <input id="tourId" className="form-control" value={form.tourId} onChange={handleChange} />
      </div>

      <div className="col-md-3">
        <label>Amount (PKR)</label>
        <input id="amountCents" type="number" className="form-control" value={form.amountCents} onChange={handleChange} />
      </div>

      <div className="col-12">
        <button className="btn btn-primary" disabled={loading}>
          {loading ? "Processing..." : "Submit & Pay"}
        </button>
      </div>
    </form>
  );
}

export default Booking;