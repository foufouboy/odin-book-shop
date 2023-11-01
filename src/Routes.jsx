import { 
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import Cart from "./pages/Cart/Cart";
import ErrorPage from "./pages/ErrorPage";


const Router = ({data, setters}) => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage/>, 
        },
        {
            path: "/library",
            element: <Library data={data} setters={setters}/>,
            errorElement: <ErrorPage/>, 
        },
        {
            path: "/cart",
            element: <Cart/>,
        },
    ]);

    return <RouterProvider router={router}/>
}

export default Router;