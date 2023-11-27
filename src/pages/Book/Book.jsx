import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import withAnimation from "../../components/withAnimation";
import DescriptionAccordion from "./DescriptionAccordion";
import Sample from "../../assets/book-sample.jpg";
import { FaStar } from "react-icons/fa";

const Book = () => {

    const navigate = useNavigate();
    const stars = [];

    for (let i = 5; i; i--) stars.push(<FaStar color="yellow"/>);
    
    return (
        <StyledBook 
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}
        >
            <div className="main-section">
                <div className="book-img">
                    <img src={Sample} alt="book image" />
                </div>
                <div className="book-caracteristics">
                    <div className="main-caract">
                        <h2 className="title">A Bright Ray of Darkness</h2>
                        <div className="author-and-date">
                            <h3 className="author">— Ethan Hawke</h3>
                            <h3 className="first-publish">1999</h3>
                        </div>
                        <div className="rating">
                            {stars.map(star => (
                                <span>{star}</span>
                            ))}
                        </div>
                    </div>
                    <button className="wanna-read">Wanna Read</button>
                    <DescriptionAccordion>
    The first novel in nearly twenty years from the acclaimed actor/writer/director is a book about art and love, fame and heartbreak--a blistering story of a young man making his Broadway debut in Henry IV just as his marriage implodes. A bracing meditation on fame and celebrity, and the redemptive, healing power of art; a portrait of the ravages of disappointment and divorce; a poignant consideration of the rites of fatherhood and manhood; a novel soaked in rage and sex, longing and despair; and a passionate love letter to the world of theater, A Bright Ray of Darkness showcases Ethan Hawke's gifts as a novelist as never before. Hawke's narrator is a young man in torment, disgusted with himself after the collapse of his marriage, still half-hoping for a reconciliation that would allow him to forgive himself and move on as he clumsily, and sometimes hilariously, tries to manage the wreckage of his personal life with whiskey and sex. What saves him is theater: in particular, the challenge of performing the role of Hotspur in a production of Henry IV under the leadership of a brilliant director, helmed by one of the most electrifying--and narcissistic--Falstaff's of all time. Searing, raw, and utterly transfixing, A Bright Ray of Darkness is a novel about shame and beauty and faith, and the moral power of art.
                    </DescriptionAccordion>
                </div>
            </div>
        </StyledBook>
    );
}

const StyledBook = styled(motion.div)`
    background: #002A48;
    padding: 30px;

    .main-section {
        display: flex;
        gap: 30px;
        transition: height .4s;

    }

    .book-img {
            height: 100%;
            img {
                width: 100%;
            }
    }

    .book-caracteristics {
            width: 60%;
    }

    .main-caract {
        display: flex;
        flex-flow: column;
    }

    .title {
        font-size: 3rem;
    }

    .author {
        font-size: 2rem;
        color: var(--peach);
    }

    .author-and-date {
        display: flex;
        align-items: baseline;
        margin-bottom: 10px;

        .first-publish {
            font-weight: bold;
            font-family: "Source Code Pro";
            padding-left: 40px;
        }
    }

    .wanna-read {
        margin: 40px 0;
        cursor: pointer;
        border: 0;
        outline: 0;
        background: #18B0AB;
        border-radius: 15px;
        padding: 15px 30px;
        font-size: 1.5rem;
        font-family: inherit;
        font-weight: 900;
        color: var(--beige);
        }

    .desc {
            h3 {
                margin-bottom: 15px;
                font-size: 1.4rem;
                color: var(--peach);
            }
            
            p {
                height: 90px;
                overflow-y: scroll;
            }
    }

    .rating {
        display: flex;
        gap: 3px;

        svg {
            --size: 25px;
            width: var(--size);
            height: var(--size);
        }
    }

    hr {
        height: 1px;
        border: none;
        background: var(--dark-grey);
        margin: 25px 0;
    }

    @media screen and (max-width: 1000px) {
        .title {
            font-size: 2.3rem;
        }

        .author-and-date {
            flex-flow: column;

            .first-publish {
                padding-left: 0;
            }
        }

        .author {
            font-size: 1.6rem;
        }

        .rating {
            svg {
                --size: 20px;
            }
        }
    }

    @media screen and (max-width: 700px) {
            .main-section {
                flex-flow: column;
                align-items: center;
            }

            .book-caracteristics {
                width: 100%;
                display: flex; 
                flex-flow: column;
                align-items: center;
                text-align: center;
            }

            .main-caract {
                align-items: center;

            }

            .author-and-date {
                align-items: center;
            }
    }
`;

export default withAnimation(Book);