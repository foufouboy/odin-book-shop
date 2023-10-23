 import { 
    createBrowserRouter,
    RouterProvider
 } from "react-router-dom";

 import Home from "./pages/Home/Home";
 import Library from "./pages/Library/Library";
 import ErrorPage from "./pages/ErrorPage";
 
 const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: "/library",
            element: <Library/>,
        },
    ]);

    return <RouterProvider router={router}/>
 }

 export default Router;