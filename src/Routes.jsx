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
    const { savedBooks } = data;
    const { setSavedBooks } = setters;

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
                {
                    path: "book/:id", 
                    element: <Book 
                    booksData={data.searchData.currentBooks}
                    setSavedBooks={setSavedBooks}
                    savedBooks={savedBooks}
                    />
                }
            ]

        },
        {
            path: "/cart",
            element: <Cart books={savedBooks} setSavedBooks={setSavedBooks}/>,
            errorElement: <ErrorPage/>, 
        },
    ]);

    return <RouterProvider router={router}/>
}

export default Router;