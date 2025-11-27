
import { createBrowserRouter } from "react-router-dom";
import Landingpage from "./Landingpage";
import Login from './Login';
import Booking from './Booking';
import AboutUs from './AboutUs';
//import HunzaPage from "./HunzaPage"
//import NaranPage from "./NaranPage";
import Adminpage from "./Adminpage";
import CreateTour from "./CreatTour";
import ManageTours from "./ManageTours";
import ViewAllTours from "./ViewAllTours";
import UpdateTour from "./UpdateTours";
import DeleteTour from "./DeleteTour";
import CategoryPages from "./CategoryPages";

import PaymentSuccess from "./PaymentSucces";
import PaymentCancel from "./PaymentCancel";
import ViewBookings from "./ViewBooking";


const route = createBrowserRouter([


    {path:"/" , element : <Landingpage />}, 
    {path: "login" , element: <Login/>}, 
    {path: "booking", element: <Booking />}, 
    
    {path: "aboutus" , element: <AboutUs />} , 
    {path: "/admin" , element: <Adminpage/>} , 

    {path: "/category/:location", element: <CategoryPages />},
    {path: "/manage" , element: <ManageTours/>},
    {path: "/create", element: <CreateTour/>},
    {path:"/views" , element:<ViewAllTours />},
    {path: "/update", element: <UpdateTour/>},
    {path: "/delete", element: <DeleteTour/>},

    {path: "/payment/success", element: <PaymentSuccess />},
    {path: "Payment-Success" , element: <PaymentSuccess />},

    {path: "/payment/cancel", element: <PaymentCancel />},
    {path: "Payment-Cancel" , element: <PaymentCancel />},
    {path: "/admin/bookings", element: <ViewBookings />},

]);
export default route;