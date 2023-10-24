import styled from "styled-components";
import Title from "../../components/Title";
import { motion } from "framer-motion";
import withAnimation from "../../components/withAnimation";

const Library = () => {
    return (
        <StyledLibrary
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}
        >
            <header>
                <Title/>
                <div className="search-container">
                    <input
                    type="text" 
                    className="search-bar"
                    placeholder="Search for a book..."/>
                </div>
                <div className="cart-container">
                    <img src="#" alt="cart icon" className="cart-icon"/>
                </div>
            </header>
        </StyledLibrary>
    );
}

const StyledLibrary = styled(motion.div)`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 45px 60px;
    }
`

export default withAnimation(Library);