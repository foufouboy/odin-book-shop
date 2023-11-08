import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import withAnimation from "../../components/withAnimation";
import { motion } from "framer-motion";

const Book = () => {

    const navigate = useNavigate();
    
    return (
        <StyledBook 
        onClick={() => navigate("/library")}
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}
        >
            <div className="book-img">
                <img src={""} alt="book image" />
            </div>
            <div className="book-caracteristics">
                <div className="main-caract">
                    <h2 className="title">A Bright Ray of Darkness</h2>
                    <h3 className="author">Ethan Hawke</h3>
                    <div className="rating"></div>
                </div>
                <div className="desc"></div>
                <button className="wanna-read"></button>
            </div>
        </StyledBook>
    );
}

const StyledBook = styled(motion.div)`
   cursor: pointer; 
`;

export default withAnimation(Book);