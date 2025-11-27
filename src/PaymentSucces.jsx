import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // Optionally call backend to verify session and fetch booking
    // e.g. API.post('/payment/verify', { sessionId })
  }, [sessionId]);

  return (
    <div className="container mt-5">
      <h2>Payment successful</h2>
      <p>Thank you — your payment was successful. Session ID: {sessionId}</p>
      <p>You will receive email confirmation shortly.</p>
    </div>
  );
}
