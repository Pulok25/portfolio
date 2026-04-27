import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";



const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {path: "/", element:<Home/>},
        {path: "/skills", element:<Skills/>},
        {path: "/projects", element:<Projects/>},
        {path: "/contact", element:<Contact/>},
    ]
}])

export default router