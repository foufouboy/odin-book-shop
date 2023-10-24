import { 
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import Cart from "./pages/Cart/Cart";
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
        {
            path: "/cart",
            element: <Cart/>,
        },
    ]);

    return <RouterProvider router={router}/>
}

export default Router;