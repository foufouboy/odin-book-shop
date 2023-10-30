import styled from "styled-components";
import Header from "./Header";
import BabelCarousel from "./BabelCarousel";
import Description from "./Description";
import LoadingAnimation from "../../components/LoadingAnimation";
import FilterDropdown from "./FilterDropdown";
import BookCard from "./BookCard";
import SearchError from "./SearchError";
import { motion } from "framer-motion";
import withAnimation from "../../components/withAnimation";
import { getCategoryName } from "./category-cards-data";
import { useEffect, useRef, useState } from "react";
import { getBooksFrom, getCategoryBooks } from "../../utils/apiFunctions";

const Library = () => {

    const [descriptionOpen, setDescriptionOpen] = useState(true);
    const [currentBooks, setCurrentBooks] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("Belle du seigneur");
    const [error, setError] = useState(null)
    const [newSearch, setNewSearch] = useState(false);

    const searchRef = useRef(null);

    const handleCategoryClick = (e) => {
        const category = e.target.getAttribute("data-value");

        if (category === currentCategory) {
            setCurrentCategory(null);
        } else {
            setCurrentCategory(category);
        }
    }

    const querySubmit = () => {
        const newQuery = searchRef.current.value;
        setNewSearch(!newSearch);
    }

    useEffect(() => {
        const actOnBooks = async () => {
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

        actOnBooks()
        .catch(error => {
            setError(error);
        })
        .finally(() => setLoading(false));
    }, [newSearch, currentCategory])

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
            {descriptionOpen && <Description toggleHandler={() => setDescriptionOpen(false)}/>}
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
                                    {
                                        query === "" ? "Query cannot be empty" : "No results"
                                    }
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