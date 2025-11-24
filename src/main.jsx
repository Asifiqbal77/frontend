 import { StrictMode } from 'react'
 import { createRoot } from 'react-dom/client';
 import './index.css';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { RouterProvider } from 'react-router-dom';
import route from './Paths.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode >
      <RouterProvider router={route} />
      
   </StrictMode>
   
);
