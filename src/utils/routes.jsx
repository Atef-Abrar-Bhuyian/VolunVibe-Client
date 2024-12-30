import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path:"/",
        errorElement: <ErrorPage></ErrorPage> ,
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
        ]
    }
])

export default routes;