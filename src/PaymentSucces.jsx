import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "./services/api";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    async function verify() {
      try {
        const res = await API.post("/payment/verify", { sessionId });
        setBooking(res.data.booking);
      } catch (err) {
        console.log("Verification error", err);
      }
    }
    if (sessionId) verify();
  }, [sessionId]);

  return (
    <div className="container mt-5">
      <h2>Payment Successful!</h2>
      <p>Your session ID: {sessionId}</p>
      <p>Thank you for your booking.</p>

      {booking && (
        <div className="alert alert-success mt-3">
          <h4>Booking Confirmed:</h4>
          <p>Tour: {booking.tourName}</p>
          <p>Name: {booking.customerName}</p>
          <p>Email: {booking.customerEmail}</p>
          <p>Amount (PKR): {booking.amount}</p>
        </div>
      )}
    </div>
  );
}