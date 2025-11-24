import React from "react";
import { Link } from "react-router-dom";

function Adminpage() {
  const stats = [
    { title: "Total Tours", value: "24", subtitle: "Active tour packages" },
    { title: "Total Bookings", value: "156", subtitle: "This month" },
    { title: "Revenue", value: "45,231", subtitle: "From last month" },
    { title: "Active Users", value: "2,350", subtitle: "Registered users" },
  ];

  const recentActivity = [
    { color: "green", title: "New booking for Hunza Valley Tour", time: "2 minutes ago" },
    { color: "orange", title: 'Tour "Naran Valley Adventure" updated', time: "1 hour ago" },
    { color: "blue", title: "New user registration", time: "3 hours ago" },
  ];


  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f6f7f8",
      padding: "1.5rem",
    },
    cardRounded: {
      borderRadius: "10px",
    },
    statCard: {
      padding: "1.25rem",
      height: "100%",
      borderRadius: "10px",
    },
    activityDot: (color) => ({
      width: 10,
      height: 10,
      borderRadius: "50%",
      marginTop: 6,
      flex: "0 0 10px",
      background: color,
    }),
    quickBtn: {
      minWidth: 140,
    },
    smallMuted: {
      color: "#6c757d",
      fontSize: "0.875rem",
    },
  };

  return (
    <div className="container-fluid" style={styles.page}>
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h5 className="text-muted">Travel Admin Dashboard</h5>

        <div className="d-flex align-items-center gap-3">
          <span className="text-muted">Welcome, Admin</span>
          <button className="btn btn-outline-secondary btn-sm">Logout</button>
        </div>
      </div>

      <div className="row g-3 mb-4">
        {stats.map((s, idx) => (
          <div className="col-12 col-sm-6 col-md-3" key={idx}>
            <div className="shadow-sm" style={{ ...styles.cardRounded }}>
              <div className="card h-100 border-0" style={{ borderRadius: 10 }}>
                <div className="card-body" style={styles.statCard}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div style={styles.smallMuted}>{s.title}</div>
                      <h4 className="mt-2 mb-1" style={{ margin: 0 }}>{s.value}</h4>
                      <div className="text-muted" style={{ fontSize: ".875rem" }}>{s.subtitle}</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card mb-4 shadow-sm" style={styles.cardRounded}>
        <div className="card-body">
          <h6 className="card-title">Quick Actions</h6>
          <p className="text-muted small">Manage your travel website content</p>
          <div className="d-flex gap-2 flex-wrap">
            <Link to = '/manage'>
            <button className="btn btn-primary btn-lg px-4" style={styles.quickBtn}>Manage Tours</button>
            </Link>
            <button className="btn btn-primary btn-lg" style={styles.quickBtn}>View Bookings</button>
            <button className="btn btn-primary btn-lg" style={styles.quickBtn}>Analytics</button>
          </div>
        </div>
      </div>

      <div className="row g-3">
        
        <div className="col-12 ">
          <div className="card shadow-sm h-100" style={styles.cardRounded}>
            <div className="card-body">
              <h6 className="card-title">Recent Activity</h6>
              <p className="text-muted small">Latest updates on your platform</p>
              <div className="mt-3">
                {recentActivity.map((a, i) => (
                  <div key={i} className="d-flex align-items-start mb-3">
                    <div style={{ marginRight: 12 }}>
                      <div style={styles.activityDot(a.color)} />
                    </div>
                    <div>
                      <div>{a.title}</div>
                      <small className="text-muted">{a.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Adminpage;