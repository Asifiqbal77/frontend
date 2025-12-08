import React, { createContext, useState, useEffect } from "react";
import { getTours } from "../services/api";

// Create a Tours context
export const ToursContext = createContext();

export const ToursProvider = ({ children }) => {
  const [tours, setTours] = useState([]);

  // useEffect runs once when component mounts to fetch tours
  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await getTours();
        setTours(res.data || []);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    }
    fetchTours();
  }, []); // empty dependency means run only once

  return (
    <ToursContext.Provider value={{ tours, setTours }}>
      {children}
    </ToursContext.Provider>
  );
};








// import {children, createContext, useContext, useState} from 'react';
 
// const TourContext = createContext();

// export const TourProvider = ({ children }) => {
//     const [tours, setTours] = useState([]);
// return (
//     <>
//         <TourContext.Provider value={{ tours, setTours }}>
//             {children}
//         </TourContext.Provider>
//         </>
// );
// };

// export const useTour = () => useContext(TourContext);

 
 