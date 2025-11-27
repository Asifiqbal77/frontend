import React, { useEffect, useState } from "react";
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
    // amount in smallest unit (cents/paisa) - you should supply this as an integer
    amountCents: prefill.amountCents || "",
    currency: prefill.currency || "usd",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If prefill provided as "price" like 55000 (PKR) or "PKR 55,000" parsing required.
    // We assume frontend passes amountCents in numeric form in Link state for reliability.
  }, []);

  const handleChange = (e) => {
    const id = e.target.id;
    setForm((p) => ({ ...p, [id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.tourId || !form.amountCents) {
      alert("Please fill required fields (name, email, tour selection, amount).");
      return;
    }

    try {
      setLoading(true);

      // Build payload expected by backend /api/payment/create-checkout-session
      const payload = {
        amountCents: Number(form.amountCents),
        currency: form.currency,
        tourId: form.tourId,
        tourName: form.tourName || "Tour Booking",
        customerName: form.name,
        customerEmail: form.email,
        description: `Booking for ${form.tourName || "tour"}`
      };

      const res = await API.post("/payment/create-checkout-session", payload);

      if (res.data && res.data.url) {
        // Redirect to Stripe Checkout
        window.location.href = res.data.url;
      } else {
        alert("Failed to start payment.");
      }
    } catch (err) {
      console.error("Checkout start error:", err);
      alert(err?.response?.data?.message || "Failed to start checkout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="row g-3 mt-3 mb-3 align-items-center justify-content-center" onSubmit={handleSubmit}>
      <div className="col-md-6 ">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" type="text" className="form-control" value={form.name} onChange={handleChange} />
      </div>

      <div className="col-md-6">
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" type="email" className="form-control" value={form.email} onChange={handleChange} />
      </div>

      <div className="col-12">
        <label htmlFor="address" className="form-label">Present Address</label>
        <input id="address" type="text" className="form-control" value={form.address} onChange={handleChange} placeholder="Present address"/>
      </div>

      <div className="col-12">
        <label htmlFor="address2" className="form-label">Permanent Address</label>
        <input id="address2" type="text" className="form-control" value={form.address2} onChange={handleChange} placeholder="Permanent address"/>
      </div>

      <div className="col-md-6">
        <label htmlFor="city" className="form-label">City</label>
        <input id="city" type="text" className="form-control" value={form.city} onChange={handleChange}/>
      </div>

      <div className="col-md-6">
        <label htmlFor="zip" className="form-label">Zip</label>
        <input id="zip" type="text" className="form-control" value={form.zip} onChange={handleChange}/>
      </div>

      <div className="col-md-6">
        <label htmlFor="tourName" className="form-label">Tour Name</label>
        <input id="tourName" type="text" className="form-control" value={form.tourName} onChange={handleChange} />
      </div>

      <div className="col-md-3">
        <label htmlFor="tourId" className="form-label">Tour ID</label>
        <input id="tourId" type="text" className="form-control" value={form.tourId} onChange={handleChange} />
      </div>

      <div className="col-md-3">
        <label htmlFor="amountCents" className="form-label">Amount (smallest unit) *</label>
        <input id="amountCents" type="number" className="form-control" value={form.amountCents} onChange={handleChange} />
        <div className="form-text">Example: 55000 for $550.00 (cents) or 550000 for PKR 5,500.00 (paisa)</div>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Starting payment..." : "Submit & Pay"}
        </button>
      </div>
    </form>
  );
}

export default Booking;










//original code is below


// import React from "react";
// function Booking() {
//   return (
// <form className="row g-3 mt-3 mb-3  align-items-center justify-content-center">

//   <div className="col-md-6 ">
//     <label for="inputName4" className="form-label">Name</label>
//     <input type="Name" className="form-control" id="inputName"/>
//   </div>
//   <div className="col-md-6">
//     <label for="inputEmail4" className="form-label">Email</label>
//     <input type="password" className="form-control" id="inputPassword4"/>
//   </div>
//   <div className="col-12">
//     <label for="inputAddress" className="form-label">Address</label>
//     <input type="text" className="form-control" id="inputAddress" placeholder="Present address"/>
//   </div>
//   <div class="col-12">
//     <label for="inputAddress2" className="form-label">Address 2</label>
//     <input type="text" className="form-control" id="inputAddress2" placeholder="permanent Address"/>
//   </div>
//   <div class="col-md-6">
//     <label for="inputCity" className="form-label">City</label>
//     <input type="text" className="form-control" id="inputCity"/>
//   </div>
//   {/* <div className="col-md-4">
//     <label for="inputState" className="form-label">State</label>
//     <input type="text" className="form-lable" id="inputState" />
//   </div>  */}

//   <div className="col-md-6">
//     <label for="inputZip" class="form-label">Zip</label>
//     <input type="text" class="form-control" id="inputZip"/>
//   </div>
//   {/* <div className="col-12">
//     <div className="form-check">
//       <input className="form-check-input" type="checkbox" id="gridCheck"/>
//       <label className="form-check-label" for="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div> */}
//   <div className="col-12">
//     <button type="submit" className="btn btn-primary">Subbmit</button>
//   </div>
// </form>
//   );
// }
// export default Booking;
