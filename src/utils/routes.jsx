import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllVolunteerPage from "../pages/AllVolunteerPage/AllVolunteerPage";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/topNeedVolunteer")
      },
      {
        path: "/allVolunteerPost",
        element: <AllVolunteerPage></AllVolunteerPage>,
        loader: () => fetch("http://localhost:5000/needVolunteer")
      },
    ],
  },
]);

export default routes;
