import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import withAnimation from "../../components/withAnimation";
import Sample from "../../assets/book-sample.jpg";

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
                <img src={Sample} alt="book image" />
            </div>
            <div className="book-caracteristics">
                <div className="main-caract">
                    <h2 className="title">A Bright Ray of Darkness</h2>
                    <h3 className="author">— Ethan Hawke</h3>
                    <div className="rating"></div>
                </div>
                <button className="wanna-read">Wanna Read</button>
                <div className="desc">
                    <h3>Description</h3>
                    <p>
The first novel in nearly twenty years from the acclaimed actor/writer/director is a book about art and love, fame and heartbreak--a blistering story of a young man making his Broadway debut in Henry IV just as his marriage implodes. A bracing meditation on fame and celebrity, and the redemptive, healing power of art; a portrait of the ravages of disappointment and divorce; a poignant consideration of the rites of fatherhood and manhood; a novel soaked in rage and sex, longing and despair; and a passionate love letter to the world of theater, A Bright Ray of Darkness showcases Ethan Hawke's gifts as a novelist as never before. Hawke's narrator is a young man in torment, disgusted with himself after the collapse of his marriage, still half-hoping for a reconciliation that would allow him to forgive himself and move on as he clumsily, and sometimes hilariously, tries to manage the wreckage of his personal life with whiskey and sex. What saves him is theater: in particular, the challenge of performing the role of Hotspur in a production of Henry IV under the leadership of a brilliant director, helmed by one of the most electrifying--and narcissistic--Falstaff's of all time. Searing, raw, and utterly transfixing, A Bright Ray of Darkness is a novel about shame and beauty and faith, and the moral power of art.
                    </p>
                </div>
            </div>
        </StyledBook>
    );
}

const StyledBook = styled(motion.div)`
   cursor: pointer; 
   display: flex;
   background: #002A48;
   padding: 30px;
   gap: 30px;

   .book-img {
        height: 100%;
   }

   .title {
    font-size: 3rem;
   }

   .author {
    font-size: 2rem;
    color: var(--peach);
   }

   .wanna-read {
    margin: 40px 0;
    border: 2px solid #14d114;
    background: inherit;
    padding: 15px 30px;
    font-size: 1.5rem;
    font-family: inherit;
    font-weight: bold;
    color: var(--beige);
   }

   .desc {
        h3 {
            margin-bottom: 15px;
            font-size: 1.4rem;
            color: var(--peach);
        }
   }

   @media screen and (max-width: 700px) {
        flex-flow: column;
   }
`;

export default withAnimation(Book);