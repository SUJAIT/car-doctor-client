import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Main from "../Layout/Main";
import Bookings from "../page/Booking/Bookings";
import CheckOut from "../page/CheckOut/CheckOut";
import Home from "../page/Home";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
        {
path:"/",
element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/checkout/:id",
          element:<PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
          
        },
        {
          path:"/bookings",
          element:<PrivateRouter><Bookings></Bookings></PrivateRouter>
          
          
        }
    ]
  }
])

export default router;