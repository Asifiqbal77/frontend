import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToursContext } from "./Contexts/ToursContext";

function Tours() {
  // Access tours from the global context
  const { tours } = useContext(ToursContext);

  // Local state for featured tours per fixed location
  const [featuredTours, setFeaturedTours] = useState([]);

  // Fixed locations for the landing page cards
  const fixedLocations = [
    "hunza",
    "naran",
    "peshawar",
    "lahore",
    "multan",
    "swat",
    "murree",
    "chitral",
    "islamabad",
  ];

  // useEffect runs whenever 'tours' changes in the context
  useEffect(() => {
    // Map one tour per fixed location
    const featured = fixedLocations.map((loc) =>
      tours.find(
        (tour) =>
          String(tour.location || "").toLowerCase() === loc.toLowerCase()
      )
    );
    setFeaturedTours(featured);
  }, [tours]); // Dependency on 'tours' ensures it updates when context changes

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">All Tours</h1>

      <div className="row">
        {featuredTours.map((tour, index) =>
          tour ? (
            <div className="col-md-4 mb-4" key={tour._id}>
              <div className="card shadow-sm">
                <img
                  src={`https://pakpeaksand-plainserver.onrender.com/${tour.images?.[0] || ""}`}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  alt="tour"
                />
                <div className="card-body">
                  <h5>{tour.name}</h5>
                  <p>{tour.description}</p>
                  <p><strong>{tour.price}</strong></p>
                  <Link
                    to={`/category/${String(tour.location || "").toLowerCase()}`}
                    className="btn btn-primary w-100"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <div
                  className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
                  style={{ height: "200px", color: "white" }}
                >
                  No Image
                </div>
                <div className="card-body">
                  <h5>{fixedLocations[index].toUpperCase()} Tours</h5>
                  <p>No tour added yet.</p>
                  <Link
                    to={`/category/${fixedLocations[index]}`}
                    className="btn btn-outline-primary w-100"
                  >
                    View Category
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Tours;

















// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { ToursContext } from "./ToursContext";

// function Tours() {
//   const { tours } = useContext(ToursContext); // Access tours from context

//   const fixedLocations = [
//     "hunza", "naran", "peshawar", "lahore", "multan", 
//     "swat", "murree", "chitral", "islamabad"
//   ];

//   const featuredTours = fixedLocations.map((loc) =>
//     tours.find(
//       (tour) =>
//         String(tour.location || "").toLowerCase() === loc.toLowerCase()
//     )
//   );

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">All Tours</h1>
//       <div className="row">
//         {featuredTours.map((tour, index) =>
//           tour ? (
//             <div className="col-md-4 mb-4" key={tour._id}>
//               <div className="card shadow-sm">
//                 <img
//                   src={`http://localhost:5000/${tour.images?.[0] || ""}`}
//                   className="card-img-top"
//                   style={{ height: "200px", objectFit: "cover" }}
//                   alt="tour"
//                 />
//                 <div className="card-body">
//                   <h5>{tour.name}</h5>
//                   <p>{tour.description}</p>
//                   <p><strong>{tour.price}</strong></p>
//                   <Link
//                     to={`/category/${String(tour.location || "").toLowerCase()}`}
//                     className="btn btn-primary w-100"
//                   >
//                     More Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="col-md-4 mb-4" key={index}>
//               <div className="card shadow-sm">
//                 <div
//                   className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
//                   style={{ height: "200px", color: "white" }}
//                 >
//                   No Image
//                 </div>
//                 <div className="card-body">
//                   <h5>{fixedLocations[index].toUpperCase()} Tours</h5>
//                   <p>No tour added yet.</p>
//                   <Link
//                     to={`/category/${fixedLocations[index]}`}
//                     className="btn btn-outline-primary w-100"
//                   >
//                     View Category
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default Tours;

















//original code before context and useeeffects
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getTours } from "./services/api";

// function Tours() {
//   const [tours, setTours] = useState([]);

//   // Fixed locations for landing page
//   const fixedLocations = [
//     "hunza",
//     "naran",
//     "peshawar",
//     "lahore",
//     "multan",
//     "swat",
//     "murree",
//     "chitral",
//     "islamabad",
//     // "karachi",
//     // "neelum",
//     // "asif"
//   ];

//   useEffect(() => {
//     async function fetchTours() {
//       try {
//         const res = await getTours();
//         setTours(res.data || []);
//       } catch (error) {
//         console.error("Error loading tours:", error);
//       }
//     }
//     fetchTours();
//   }, []);

//   // Get one tour per fixed location
//   const featuredTours = fixedLocations.map((loc) =>
//     tours.find(
//       (tour) =>
//         String(tour.location || "").toLowerCase() === loc.toLowerCase()
//     )
//   );

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">All Tours</h1>

//       <div className="row">
//         {featuredTours.map((tour, index) =>
//           tour ? (
//             <div className="col-md-4 mb-4" key={tour._id}>
//               <div className="card shadow-sm">
//                 <img
//                   src={`http://localhost:5000/${tour.images?.[0] || ""}`}
//                   className="card-img-top"
//                   style={{ height: "200px", objectFit: "cover" }}
//                   alt="tour"
//                 />
//                 <div className="card-body">
//                   <h5>{tour.name}</h5>
//                   <p>{tour.description}</p>
//                   <p>
//                     <strong>{tour.price}</strong>
//                   </p>
//                   <Link
//                     to={`/category/${String(tour.location || "").toLowerCase()}`}
//                     className="btn btn-primary w-100"
//                   >
//                     More Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="col-md-4 mb-4" key={index}>
//               <div className="card shadow-sm">
//                 <div
//                   className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
//                   style={{ height: "200px", color: "white" }}
//                 >
//                   No Image
//                 </div>
//                 <div className="card-body">
//                   <h5>{fixedLocations[index].toUpperCase()} Tours</h5>
//                   <p>No tour added yet.</p>
//                   <Link
//                     to={`/category/${fixedLocations[index]}`}
//                     className="btn btn-outline-primary w-100"
//                   >
//                     View Category
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default Tours;