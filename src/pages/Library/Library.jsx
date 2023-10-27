import styled from "styled-components";
import Header from "./Header";
import BabelCarousel from "./BabelCarousel";
import Description from "./Description";
import LoadingAnimation from "../../components/LoadingAnimation";
import FilterDropdown from "./FilterDropdown";
import BookCard from "./BookCard";
import { motion } from "framer-motion";
import withAnimation from "../../components/withAnimation";
import { useEffect, useRef, useState } from "react";
import { getBooksFrom } from "../../utils/apiFunctions";

const Library = () => {

    const [descriptionOpen, setDescriptionOpen] = useState(true);
    const [currentBooks, setCurrentBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("Hermann Hesse");

    const searchRef = useRef(null);

    const querySubmit = () => {
        const newQuery = searchRef.current.value;
        setQuery(newQuery);
    }

    useEffect(() => {
        const actOnBooks = async () => {
            setLoading(true);
            const books = await getBooksFrom(query);
            console.log(books);
            setCurrentBooks(books);
            setLoading(false);
        }

        actOnBooks();
    }, [query])

    return (
        <StyledLibrary
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}
        >
            <Header searchRef={searchRef} querySubmit={querySubmit}/>
            {descriptionOpen && <Description 
            toggleHandler={() => setDescriptionOpen(false)}/>}
            <BabelCarousel/>
            <section className="results">
                <h2>Everything</h2>
                <FilterDropdown/>
                    {loading ? (
                        <LoadingAnimation/>
                    ) : (
                        <div className="cards">
                            {
                                currentBooks.map((book) => (
                                    <BookCard 
                                    key={book.id}
                                    book={book}/>
                                ))
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
        border-radius: 15px;
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
        margin-top: 15px;
        gap: 40px;
    }

    @media (max-width: 500px) {
        .cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .results {
            h2 {
                font-size: 2rem;
            }
        }
    }
`

export default withAnimation(Library);