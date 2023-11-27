import { 
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import Book from "./pages/Book/Book";
import Cart from "./pages/Cart/Cart";
import ErrorPage from "./pages/ErrorPage";
import InnerLibrary from "./pages/Library/InnerLibrary";


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
                {index: true, element: <InnerLibrary data={data} setters={setters}/>},
                {path: "book", element: 
                <Book 
                book={data.bookToShow}
                setSavedBooks={setters.setSavedBooks}/>}
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