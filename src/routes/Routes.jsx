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
import PrivateRoute from "./PrivateRoute";
import JobDetail from "../pages/jobDetail/JobDetail";
import UpdateJob from "../pages/UpdateJob/UpdateJob";

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
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        }, 
        {
          path: '/mypostedjobs',
          element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute> 
        }, 
        {
          path:'/mybids', 
          element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
        }, 
        {
          path:'/bidrequest', 
          element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>
        }, 
        {
          path: '/jobs/:id', 
          element: <JobDetail></JobDetail>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        }, 
        {
          path: '/updatejob/:id', 
          element: <UpdateJob></UpdateJob>, 
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        }, 
    ]
  },
]);

export default router;
