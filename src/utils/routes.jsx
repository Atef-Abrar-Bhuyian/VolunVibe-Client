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
import SuccessStories from "../pages/SuccessStories/SuccessStories";
import About from "../pages/About/About";
import TermsPage from "../pages/TermsPage/TermsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment12-server-gold.vercel.app/topNeedVolunteer"),
      },
      {
        path: "/allVolunteerPost",
        element: <AllVolunteerPage></AllVolunteerPage>,
        loader: () =>
          fetch(
            "https://assignment12-server-gold.vercel.app/totalNumberOfPosts"
          ),
      },
      {
        path: "/successStories",
        element: <SuccessStories></SuccessStories>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/terms",
        element: <TermsPage></TermsPage>
      },
      {
        path: "/volunteerPost/:id",
        element: (
          <PrivateRoute>
            <VolunteerPostDetails></VolunteerPostDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment12-server-gold.vercel.app/volunteerPost/${params.id}`
          ),
      },
      {
        path: "/beAVolunteer/:id",
        element: (
          <PrivateRoute>
            <BeAVolunteer></BeAVolunteer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment12-server-gold.vercel.app/volunteerPost/${params.id}`
          ),
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
        loader: ({ params }) =>
          fetch(
            `https://assignment12-server-gold.vercel.app/volunteerPost/${params.id}`
          ),
      },
    ],
  },
]);

export default routes;
