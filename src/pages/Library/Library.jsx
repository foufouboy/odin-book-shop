import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Header from "../../components/Header";
import BabelCarousel from "./BabelCarousel";
import Description from "./Description";
import LoadingAnimation from "../../components/LoadingAnimation";
import FilterDropdown from "./FilterDropdown";
import BookCard from "./BookCard";
import SearchError from "./SearchError";
import withAnimation from "../../components/withAnimation";

import { getCategoryName } from "./category-cards-data";
import { getBooksFrom, getCategoryBooks } from "../../utils/api-functions";

const Library = ({data, setters}) => {

    const { descOpen } = data;
    const { setDescOpen } = setters;

    const [descriptionOpen, setDescriptionOpen] = useState(true);
    const [apiStatus, setApiStatus] = useState({
        loading: false,
        error: null,
    });
    const [search, setSearch] = useState({
        query: "Belle du seigneur",
        currentBooks: [],
        currentCategory: null,
        trigger: false,
    });

    const searchRef = useRef(null);
    const {query, currentBooks, currentCategory, trigger} = search;
    const {loading, error} = apiStatus;


    const handleCategoryClick = (e) => {
        const category = e.target.getAttribute("data-value");

        if (category === currentCategory) {
            setSearch(prev => ({...prev, currentCategory: null}));
        } else {
            setSearch(prev => ({...prev, currentCategory: category}));
        }

        setSearch(prev => ({...prev, trigger: !trigger}));
    }

    const querySubmit = () => {
        const newQuery = searchRef.current.value;
        setSearch(prev => ({...prev, trigger: !trigger}));
    }

    useEffect(() => {

        const getBooks = async () => {
            if (error) setApiStatus(prev => ({...prev, error: null}));

            let books;

            setApiStatus(prev => ({...prev, loading: true}));

            if (currentCategory) {
                books = await getCategoryBooks(currentCategory, query);
            } else {
                books = await getBooksFrom(query);
            }

            setSearch(prev => ({...prev, currentBooks: books}));
        }

        getBooks()
        .catch(error => {
            setError(error);
        })
        .finally(() => setApiStatus(prev => ({...prev, loading: false})));
    }, [trigger])

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
            onQueryChange={(e) => setSearch(prev => ({...prev, query: e.target.value}))}
            query={query}/>
            {descOpen && <Description toggleHandler={() => setDescOpen(false)}/>}
            <BabelCarousel 
            handleCategoryClick={handleCategoryClick}
            currentCategory={currentCategory}/>
            <section className="results">
                <h2>{getCategoryName(currentCategory)}</h2>
                <FilterDropdown/>
                    {error ? (
                        <SearchError error={error}/>
                    ) : loading ? (
                        <LoadingAnimation/>
                    ) : (
                        <div className="cards">
                            { currentBooks.length ? 
                                currentBooks.map((book, i) => (
                                    <BookCard 
                                    key={book.id + "-" + i}
                                    book={book}/>
                                )) : (
                                <p className="no-results">
                                    No results.
                                </p>
                                )
                            }
                        </div>
                    )}
            </section>
        </StyledLibrary>
    );
}

const StyledLibrary = styled(motion.div)`
    padding: 30px 25px;

    .results {
        margin-top: 25px;
        padding: 30px;
        background: #002A48;

        h2 {
            font-size: 3.5rem;
            margin-bottom: 5px;
        }
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        margin: 0 auto;
        margin-top: 20px;
        gap: 40px;
    }

    .no-results {
        padding: 10px 0;
        padding-left: 5px;
        font-size: 1.5rem;
        font-family: "Source Code Pro";
        opacity: .8;
        width: 340px;
    }

    @media (max-width: 500px) {
        padding-bottom: 0;

        .cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .results {
            margin-left: -25px;
            margin-right: -25px;

            h2 {
                font-size: 2rem;
            }
        }

        .no-results {
            font-size: 1.2rem;
        }
    }
`

export default withAnimation(Library);