import styled from "styled-components";
import Header from "./Header";
import BabelCarousel from "./BabelCarousel";
import Description from "./Description";
import FilterDropdown from "./FilterDropdown";
import BookCard from "./BookCard";
import { motion } from "framer-motion";
import withAnimation from "../../components/withAnimation";
import { useState } from "react";

const Library = () => {

    const [descriptionOpen, setDescriptionOpen] = useState(true);

    return (
        <StyledLibrary
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}
        >
            <Header/>
            {descriptionOpen && <Description 
            toggleHandler={() => setDescriptionOpen(false)}/>}
            <BabelCarousel/>
            <section className="results">
                <FilterDropdown/>
                <div className="cards">
                    {Array(30).fill(0).map((_, i) => (
                        <BookCard key={"book-card-" + i}/>
                    ))}
                </div>
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
            margin-bottom: 30px;
            font-size: 1.5rem;
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
            grid-template-columns: 1fr 1fr;
        }
    }
`

export default withAnimation(Library);