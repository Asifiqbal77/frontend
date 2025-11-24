import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTourById, getTours } from "./services/api";
//from chatgpt
import {Link} from "react-router-dom";

function HunzaPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [hunzaTours, setHunzaTours] = useState([]);

  useEffect(() => {
    async function fetchTour() {
      try {
        // Fetch selected tour by ID
        if (id) {
          const res = await getTourById(id);
          setTour(res.data);
        }

        // Fetch all tours
        const all = await getTours();

        // Filter Hunza tours
        const filtered = all.data.filter(t =>
          t.name.toLowerCase().includes("hunza")
        );

        setHunzaTours(filtered);

      } catch (err) {
        alert("Failed to fetch tours");
      }
    }
    fetchTour();
  }, [id]);

  const handleClick = () => {
    navigate("/booking");
  };

  if (!tour) return <div>Loading...</div>;

  return (
    <div className="container mt-5">

      {/* Selected Tour Heading */}
      <h2 className="h4 mb-3" style={{ fontWeight: 600 }}>
        {tour.name}
      </h2>
      <p className="mb-4">{tour.description}</p>

      <hr />

      <h3 className="h5 mt-4 mb-3">More Hunza Valley Tours</h3>

      <div className="row">
        {hunzaTours.map((ht, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm" style={{ width: "100%", height: "420px" }}>
              <img
                src={ht.images[0] ? `http://localhost:5000/${ht.images[0]}` : "https://via.placeholder.com/200"}
                className="card-img-top"
                alt={ht.name}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{ht.name}</h5>
                  <p className="card-text">{ht.description}</p>
                </div>

                <div>
                  <h6 className="text-primary mb-3">{ht.price}</h6>
                  <button className="btn btn-primary w-100" onClick={handleClick}>
                    Book Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default HunzaPage;






// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getTourById, getTours } from "./services/api";

// function HunzaPage() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [tour, setTour] = useState(null);

//   useEffect(() => {
//     async function fetchTour() {
//       try {
//         if (id) {
//           const res = await getTourById(id);
//           setTour(res.data);
//         } else {
//           const res = await getTours();
//           // Fallback: pick the first Hunza Valley tour by name
//           const hunzaTour = res.data.find(
//             t => t.name && t.name.toLowerCase().includes("hunza")
//           );
//           setTour(hunzaTour);
//         }
//       } catch (err) {
//         alert("Failed to fetch tour");
//       }
//     }
//     fetchTour();
//   }, [id]);

//   const handleClick = () => {
//     navigate("/booking");
//   };

//   // Page content here, similar to your design
//   if (!tour) return <div>Loading...</div>;

//   return (
//     <div className="container mt-5">
//       <h2 className="h4 mb-10" style={{ fontWeight: 600 }}>
//         {tour.name}
//       </h2>
//       <p className="mb-4">{tour.description}</p>
//       <div className="row">
//         {tour.images && tour.images.map((img, idx) => (
//   <div className="col-md-4 mb-4" key={idx}>
//     <div className="card h-100 shadow-sm" style={{ width: "100%", height: "420px" }}>
//       <img
//         src={img ? `http://localhost:5000/${img}` : "https://via.placeholder.com/200"}
//         className="card-img-top"
//         alt={tour.name}
//         style={{ height: "220px", objectFit: "cover" }}
//       />
//       <div className="card-body d-flex flex-column justify-content-between">
//         <div>
//           <h5 className="card-title">{tour.name}</h5>
//           <p className="card-text">{tour.description}</p>
//         </div>
//         <div>
//           <h6 className="text-primary mb-3">{tour.price}</h6>
//           <button className="btn btn-primary w-100" onClick={handleClick}>
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// ))}
//         {/* {tour.images && tour.images.map((img, idx) => (
//           <div className="col-md-4 mb-4" key={idx}>
//             <div className="card h-100 shadow-sm" style={{ width: "100%", height: "420px" }}>
//               <img
//                 // src={`http://localhost:5000/${img}`}
//                 // src={tour.images[0] ? `http://localhost:5000/${tour.images[0]}` : "https://via.placeholder.com/200"}
//                 src={img ? `http://localhost:5000/${img}` : "https://via.placeholder.com/200"}
//                 className="card-img-top"
//                 alt={tour.name}
//                 style={{ height: "220px", objectFit: "cover" }}
//               />
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                   <h5 className="card-title">{tour.name}</h5>
//                   <p className="card-text">{tour.description}</p>
//                 </div>
//                 <div>
//                   <h6 className="text-primary mb-3">{tour.price}</h6>
//                   <button className="btn btn-primary w-100" onClick={handleClick}>
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))} */}
//       </div>
//     </div>
//   );
// }
// export default HunzaPage;
