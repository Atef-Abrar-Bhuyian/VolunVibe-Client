import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllVolunteerPage from "../pages/AllVolunteerPage/AllVolunteerPage";
import VolunteerPostDetails from "../pages/VolunteerPostDetails/VolunteerPostDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import ManageMyPost from "../pages/ManageMyPost/ManageMyPost";
import ModifyPost from "../pages/ModifyPost/ModifyPost";
import BeAVolunteer from "../pages/BeAVolunteer/BeAVolunteer";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/topNeedVolunteer"),
      },
      {
        path: "/allVolunteerPost",
        element: <AllVolunteerPage></AllVolunteerPage>,
        loader: () => fetch("http://localhost:5000/needVolunteer"),
      },
      {
        path: "/volunteerPost/:id",
        element: (
          <PrivateRoute>
            <VolunteerPostDetails></VolunteerPostDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteerPost/${params.id}`),
      },
      {
        path: "/beAVolunteer/:id",
        element: (
          <PrivateRoute>
            <BeAVolunteer></BeAVolunteer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteerPost/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addVolunteerPost",
        element: (
          <PrivateRoute>
            <AddVolunteerPost></AddVolunteerPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyPost",
        element: (
          <PrivateRoute>
            <ManageMyPost></ManageMyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/modifyPost/:id",
        element: (
          <PrivateRoute>
            <ModifyPost></ModifyPost>
          </PrivateRoute>
        ),
        loader: ({params})=> fetch(`http://localhost:5000/volunteerPost/${params.id}`)
      },  
    ],
  },
]);

export default routes;
