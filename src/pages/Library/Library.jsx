import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Header from "../../components/Header";
import InnerLibrary from "./InnerLibrary";
import withAnimation from "../../components/withAnimation";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { getBooksFrom, getCategoryBooks } from "../../utils/api-functions";
import getFilteredBooks from "./filtering-functions";
import useFirstMount from "../../utils/useFirstRender";

const Library = ({data, setters}) => {

    const {
        searchData: {
            query,
            currentBooks,
            currentCategory,
            trigger,
            filter,
        },
        apiStatus: {
            error,
        },
        savedBooks,
    } = data;

    const {
        setLoading,
        setError,
        setQuery,
        setCurrentBooks,
        setTrigger,
    } = setters;

    const searchRef = useRef(null);
    const firstRender = useFirstMount();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (firstRender) return;

        const getBooks = async () => {
            if (error) setError(null);

            let books;

            setLoading(true);

            if (currentCategory) {
                books = await getCategoryBooks(currentCategory, query);
            } else {
                books = await getBooksFrom(query);
            }
            console.log(books);
            setCurrentBooks(books);
        }

        getBooks()
        .catch(error => {
            setError(error);
        })
        .finally(() => setLoading(false));
    }, [trigger])

    const querySubmit = () => {
        const newQuery = searchRef.current.value;
        if (location.pathname !== "/library/") {
            navigate("/library/");
        }
        setTrigger();
    }

    return (
        <StyledLibrary
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}
        >
            <Header 
            searchRef={searchRef} 
            querySubmit={querySubmit}
            onQueryChange={(e) => setQuery(e.target.value)}
            query={query}
            savedBooks={savedBooks}/>
            <Outlet/>
        </StyledLibrary>
    );
}

const StyledLibrary = styled(motion.div)`
    padding: 30px 25px;
`

export default withAnimation(Library);