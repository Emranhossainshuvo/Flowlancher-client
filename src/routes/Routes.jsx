import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import MyBids from "../pages/MyBids/MyBids";
import BidRequest from "../pages/BidRequest/BidRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/', 
            element: <Home></Home>
        }, 
        {
            path: '/login', 
            element: <Login></Login>
        }, 
        {
          path: '/register', 
          element: <Register></Register>
        }, 
        {
          path: '/addjob', 
          element: <AddJob></AddJob>
        }, 
        {
          path: '/mypostedjobs',
          element: <MyPostedJob></MyPostedJob> 
        }, 
        {
          path:'/mybids', 
          element: <MyBids></MyBids>
        }, 
        {
          path:'/bidrequest', 
          element: <BidRequest></BidRequest>
        }
    ]
  },
]);

export default router;
