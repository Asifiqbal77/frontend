import React, { useEffect, useState } from "react";
import { getAllBookings } from "./services/api";

function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    try {
      const res = await getAllBookings();
      setBookings(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-4">
      <h4>All Bookings</h4>
      {loading ? <p>Loading...</p> : (
        <div className="table-responsive mt-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Tour</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Status</th>
                <th>Booked At</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b._id}>
                  <td>{b.tourName} <div className="text-muted small">({b.tourId})</div></td>
                  <td>{b.customerName}</td>
                  <td>{b.customerEmail}</td>
                  <td>{b.amount}</td>
                  <td>{b.currency}</td>
                  <td>{b.status}</td>
                  <td>{new Date(b.createdAt).toLocaleString()}</td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr><td colSpan="7" className="text-center">No bookings yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ViewBookings;
