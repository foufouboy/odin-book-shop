 import { 
    createBrowserRouter,
    RouterProvider
 } from "react-router-dom";

 import Home from "./pages/Home/Home";
 import ErrorPage from "./pages/ErrorPage";
 
 const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage/>,
        },
    ]);

    return <RouterProvider router={router}/>
 }

 export default Router;