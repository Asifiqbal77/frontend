
import { createBrowserRouter } from "react-router-dom"
import Landingpage from "./Landingpage"
import Login from './Login'
import Booking from './Booking'
import AboutUs from './AboutUs'
import HunzaPage from "./HunzaPage"
import NaranPage from "./NaranPage"
import Adminpage from "./Adminpage"
import CreateTour from "./CreatTour"
import ManageTours from "./ManageTours"
import ViewAllTours from "./ViewAllTours"
import UpdateTour from "./UpdateTours"
import DeleteTour from "./DeleteTour"

const route = createBrowserRouter([


    {path:"/" , element : <Landingpage />} , 
    {path: "login" , element: <Login/>} , 
    {path: "booking" , element: <Booking />} , 
    {path:"/hunzavalleytours/:id"  , element : <HunzaPage />} , 
    {path:"/naranvalleytours/:id" ,element: <NaranPage />},
    {path: "aboutus" , element: <AboutUs />} , 
    {path: "/admin" , element: <Adminpage/>} , 
    // {path : "/admin/create" , element: <CreateTour />},
    {path: "/manage" , element: <ManageTours/>},
    {path: "/create", element: <CreateTour/>},
    {path:"/views" , element:<ViewAllTours />},
    {path: "/update", element: <UpdateTour/>},
    {path: "/delete", element: <DeleteTour/>}

]);
export default route