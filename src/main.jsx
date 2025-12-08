import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { RouterProvider } from 'react-router-dom';
import route from './Paths.jsx'

// import { ToursProvider } from './Contexts/TourContext';
import { ToursProvider } from "./Contexts/ToursContext";

import { BookingProvider } from './Contexts/BookingContext';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <ToursProvider>
        <BookingProvider>
          <RouterProvider router={route} />
        </BookingProvider>
      </ToursProvider>
   </StrictMode>
);



















//original code before context and useeffect
//  import { StrictMode } from 'react'
//  import { createRoot } from 'react-dom/client';
//  import './index.css';

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";

// import 'bootstrap/dist/css/bootstrap.min.css';


// import { RouterProvider } from 'react-router-dom';
// import route from './Paths.jsx'

// createRoot(document.getElementById('root')).render(
//    <StrictMode >
//       <RouterProvider router={route} />
      
//    </StrictMode>
   
// );
