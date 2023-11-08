import { 
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import Book from "./pages/Book/Book";
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
            children: [
                { path: "book", element: <Book/>},
            ]
        },
        {
            path: "/cart",
            element: <Cart/>,
            errorElement: <ErrorPage/>, 
        },
    ]);

    return <RouterProvider router={router}/>
}

export default Router;