import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Header from "../../components/Header";
import InnerLibrary from "./InnerLibrary";
import withAnimation from "../../components/withAnimation";

import { getBooksFrom, getCategoryBooks } from "../../utils/api-functions";
import getFilteredBooks from "./filtering-functions";
import useFirstMount from "../../utils/useFirstRender";

const Library = ({data, setters}) => {

    const {
        descOpen,
        savedBooks,
        searchData: {
            query,
            currentBooks,
            currentCategory,
            trigger,
            filter,
        },
        apiStatus: {
            loading,
            error,
        }
    } = data;

    const {
        setDescOpen,
        setLoading,
        setError,
        setQuery,
        setCurrentBooks,
        setCurrentCategory,
        setTrigger,
        setFilter,
        setSavedBooks
    } = setters;

    const searchRef = useRef(null);
    const firstRender = useFirstMount();
    const displayedBooks = getFilteredBooks(currentBooks, filter);

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
            query={query}/>

            <InnerLibrary
            data={{
                descOpen,
                currentCategory,
                filter,
                error,
                loading,
                currentBooks,
                displayedBooks,
            }}
            setters={{
                setDescOpen,
                setCurrentCategory,
                setFilter,
                setTrigger,
            }}/>

        </StyledLibrary>
    );
}

const StyledLibrary = styled(motion.div)`
    padding: 30px 25px;
`

export default withAnimation(Library);