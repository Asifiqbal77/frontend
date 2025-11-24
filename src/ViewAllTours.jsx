

function ViewAllTours() {
    
  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f6f7f8",
      padding: "1.5rem",
    },
    cardRounded: {
      borderRadius: "12px",
    },
    input: {
      backgroundColor: "#f1f1f3",
      border: "none",
      padding: "0.75rem 1rem",
    },
    tabBtn: (active) => ({
      flex: 1,
      borderRadius: "12px",
      background: active ? "#fff" : "#e9ecef",
      border: "none",
      padding: "0.75rem",
      fontWeight: active ? "600" : "400",
    }),
    badge: {
      backgroundColor: "#e9f5ec",
      color: "#28a745",
      fontSize: "0.75rem",
      padding: "0.3rem 0.75rem",
      borderRadius: "20px",
      fontWeight: 500,
    },
    iconBtn: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
    },
  };

  const tours = [
    {
      name: "Hunza Valley Tour",
      location: "Hunza Valley, Gilgit-Baltistan",
      duration: "5 Days",
      price: "25,000",
      maxPeople: 15,
    },
    {
      name: "Naran Kaghan Adventure",
      location: "Naran, Kaghan Valley",
      duration: "4 Days",
      price: "20,000",
      maxPeople: 20,
    },
    {
      name: "Skardu Expedition",
      location: "Skardu, Gilgit-Baltistan",
      duration: "7 Days",
      price: "35,000",
      maxPeople: 12,
    },
  ];

  return (
    <div className="container-fluid" style={styles.page}>
      
      <div className="card shadow-sm p-4" style={styles.cardRounded}>
        <h5 className="mb-1">All Tours</h5>
        <p className="text-muted small">View and manage all tour packages</p>

       
        <div className="input-group mb-4">
          <span className="input-group-text bg-white border-0" aria-hidden="true">
            <i className="bi bi-search text-muted" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search tours..."
            style={styles.input}
            aria-label="Search tours"
          />
        </div>

        
        <div className="table-responsive">
          <table className="table table-borderless align-middle">
            <thead>
              <tr className="text-muted small">
                <th>Tour Name</th>
                <th>Location</th>
                <th>Duration</th>
                <th>Price (PKR)</th>
                <th>Max People</th>
                </tr>
            </thead>
            <tbody>
              {tours.map((tour, index) => (
                <tr key={index}>
                  <td>{tour.name}</td>
                  <td>{tour.location}</td>
                  <td>{tour.duration}</td>
                  <td>{tour.price}</td>
                  <td>{tour.maxPeople}</td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewAllTours;




// import React from "react";
// import { Link } from "react-router-dom";

// function ViewAllTours() {
//   const styles = {
//     page: {
//       minHeight: "100vh",
//       background: "#f6f7f8",
//       padding: "1.5rem",
//     },
//     cardRounded: {
//       borderRadius: "12px",
//     },
//     input: {
//       backgroundColor: "#f1f1f3",
//       border: "none",
//       padding: "0.75rem 1rem",
//     },
//     tabBtn: (active) => ({
//       flex: 1,
//       borderRadius: "12px",
//       background: active ? "#fff" : "#e9ecef",
//       border: "none",
//       padding: "0.75rem",
//       fontWeight: active ? "600" : "400",
//     }),
//     badge: {
//       backgroundColor: "#e9f5ec",
//       color: "#28a745",
//       fontSize: "0.75rem",
//       padding: "0.3rem 0.75rem",
//       borderRadius: "20px",
//       fontWeight: 500,
//     },
//     iconBtn: {
//       background: "none",
//       border: "none",
//       cursor: "pointer",
//       padding: 0,
//     },
//   };

//   const tours = [
//     {
//       name: "Hunza Valley Tour",
//       location: "Hunza Valley, Gilgit-Baltistan",
//       duration: "5 Days",
//       price: "25,000",
//       maxPeople: 15,
//     },
//     {
//       name: "Naran Kaghan Adventure",
//       location: "Naran, Kaghan Valley",
//       duration: "4 Days",
//       price: "20,000",
//       maxPeople: 20,
//     },
//     {
//       name: "Skardu Expedition",
//       location: "Skardu, Gilgit-Baltistan",
//       duration: "7 Days",
//       price: "35,000",
//       maxPeople: 12,
//     },
//   ];

//   return (
//     <div className="container-fluid" style={styles.page}>
//       {/* Table Card */}
//       <div className="card shadow-sm p-4" style={styles.cardRounded}>
//         <h5 className="mb-1">All Tours</h5>
//         <p className="text-muted small">View and manage all tour packages</p>

//         {/* Search input */}
//         <div className="input-group mb-4">
//           <span className="input-group-text bg-white border-0">
//             <i className="bi bi-search text-muted"></i>
//           </span>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search tours..."
//             style={styles.input}
//           />
//         </div>

//         {/* Table */}
//         <div className="table-responsive">
//           <table className="table table-borderless align-middle">
//             <thead>
//               <tr className="text-muted small">
//                 <th>Tour Name</th>
//                 <th>Location</th>
//                 <th>Duration</th>
//                 <th>Price (PKR)</th>
//                 <th>Max People</th>
//                 {/* <th>Status</th> */}
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tours.map((tour, index) => (
//                 <tr key={index}>
//                   <td>{tour.name}</td>
//                   <td>{tour.location}</td>
//                   <td>{tour.duration}</td>
//                   <td>{tour.price}</td>
//                   <td>{tour.maxPeople}</td>
//                   <td>
//                     <div className="d-flex align-items-center gap-2">
//                       {/* Edit icon */}
//                       <button style={styles.iconBtn}>
//                         <i className="bi bi-pencil" title="Edit"></i>
//                       </button>
//                       {/* Delete icon */}
//                       <button style={styles.iconBtn}>
//                         <i className="bi bi-trash text-danger" title="Delete"></i>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ViewAllTours;