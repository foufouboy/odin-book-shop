import { useState, useEffect } from "react";
import useLocalStorage from "./utils/useLocalStorage";
import Router from "./Routes";

const DataController = ({children}) => {

    const [descOpen, setDescOpen] = useLocalStorage("descOpen", true);
    const [apiStatus, setApiStatus] = useLocalStorage("apiStatus", {
        loading: false,
        error: null,
    });
    const [searchData, setSearchData] = useLocalStorage("searchData", {
        query: "Belle du seigneur",
        currentBooks: [],
        currentCategory: null,
        trigger: false,
        filter: "pertinence",
    });
    const [savedBooks, setSavedBooks] = useLocalStorage("savedBooks", []);

    const setLoading = (value) => setApiStatus(prev => ({...prev, loading: value}));
    const setError = (value) => setApiStatus(prev => ({...prev, error: value}));
    const setQuery = (value) => setSearchData(prev => ({...prev, query: value}));
    const setCurrentBooks = (value) => setSearchData(prev => ({...prev, currentBooks: value}));
    const setCurrentCategory = (value) => setSearchData(prev => ({...prev, currentCategory: value}));
    const setTrigger = () => setSearchData(prev => ({...prev, trigger: !prev.trigger}));
    const setFilter = (value) => setSearchData(prev => ({...prev, filter: value}));

    return (
        <>
            <Router 
            data={{
                descOpen,
                apiStatus,
                searchData,
                savedBooks,
            }} 
            setters={{
                setDescOpen,
                setLoading,
                setError,
                setQuery,
                setCurrentBooks,
                setCurrentCategory,
                setTrigger,
                setFilter,
                setSavedBooks,
            }}/>
        </>
    );
}

export default DataController;