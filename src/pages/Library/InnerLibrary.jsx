import styled from "styled-components";
import { getCategoryName } from "./category-cards-data";

import BabelCarousel from "./BabelCarousel";
import FilterDropdown from "./FilterDropdown";
import BookCard from "./BookCard";
import LoadingAnimation from "../../components/LoadingAnimation";

const InnerLibrary = ({data, setters}) => {

    const {
        descOpen,
        currentCategory,
        filter,
        error,
        loading,
        currentBooks,
        displayedBooks,
    } = data;

    const {
        setDescOpen,
        setCurrentCategory,
        setFilter,
        setTrigger,
    } = setters;

    const handleCategoryClick = (e) => {
        const category = e.target.getAttribute("data-value");

        if (category === currentCategory) {
            setCurrentCategory(null);
        } else {
            setCurrentCategory(category);
        }

        setTrigger();
    }

    const handleFilterChange = (e) => {
        const filter = e.target.textContent;

        console.log(filter);

        filter === "Name" ? setFilter("name") :
        filter === "Rating" ? setFilter("rating") :
        filter === "Date" ? setFilter("date") :
        setFilter("pertinence");
    }

    return (
        <StyledInnerLibrary>
            {
                descOpen && 
                <Description toggleHandler={() => setDescOpen(false)}/>
            }
            <BabelCarousel
            handleCategoryClick={handleCategoryClick}
            currentCategory={currentCategory}/>
            <section className="results">
                <h2>{getCategoryName(currentCategory)}</h2>
                <FilterDropdown 
                handleFilterChange={handleFilterChange}
                filter={filter}/>
                    {error ? (
                        <SearchError error={error}/>
                    ) : loading ? (
                        <LoadingAnimation/>
                    ) : (
                        <div className="cards">
                            { currentBooks.length ? 
                                displayedBooks.map((book, i) => (
                                    <BookCard 
                                    key={book.id + "-" + i}
                                    book={book}/>
                                )) : (
                                <p className="no-results">
                                    Either no results or you didn't search anything :)
                                </p>
                                )
                            }
                        </div>
                    )}
            </section>
        </StyledInnerLibrary>
    );
}

const StyledInnerLibrary = styled.div`
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
`;

export default InnerLibrary;