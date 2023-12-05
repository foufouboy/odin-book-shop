import styled from "styled-components";
import { motion } from "framer-motion";
import withAnimation from "../../components/withAnimation";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { convertNumberToTime } from "../../utils/misc-utils";
import Sample from "../../assets/book-sample.jpg";

const Cart = ({books, setSavedBooks}) => {
    const navigate = useNavigate();

    const unsaveBook = (id) => {
        setSavedBooks(prev => prev.filter(book => book.id !== id));
    } 

    const getTotalTime = () => {
        return convertNumberToTime(
            books.reduce((acc, book) => {
                return acc += book.fakeReadingTime;
            }, 0)
        );
    }

    const deleteAllBooks = () => {
        setSavedBooks([]);
    }

    return (
        <StyledCart
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}>
            <Title/>
            <section className="cart">
                <h2>Cart</h2>
                { books.length ? (
                    <div className="cart-content">
                        <div className="cart-items">
                            {books.map(book => (
                                <div className="book-item">
                                    <section>
                                        <div className="min-image">
                                            <img src={book.coverImg} alt="book-img" />
                                        </div>
                                        <div className="caracteristics">
                                            <div className="main">
                                                <p className="title">{book.title}</p>
                                                <p className="author-and-date">{`${book.author}, ${book.firstPublish}`}</p>
                                                <p className="id">id: <span>{book.id}</span></p>
                                                <p className="read-time">Read time : <span>{convertNumberToTime(book.fakeReadingTime)}</span></p>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="additionnal-infos">
                                        <button
                                        onClick={() => unsaveBook(book.id)}
                                        >
                                            Delete book
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="validation">
                            <div className="total">
                                <p>TOTAL :</p>
                                <span>{getTotalTime()} of lecture</span>
                            </div>
                            <button
                            onClick={deleteAllBooks}>
                                Validate All
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="no-items">
                        <h3>Not a single book here!</h3>
                        <p>¯\_(⊙_ʖ⊙)_/¯</p>
                        <Button 
                        className="inspiration"
                        onClick={() => navigate("/library/")}>
                            Go to the library for some inspiration!
                        </Button>
                    </div>
                ) }
            </section>
            <section className="order-details"></section>
        </StyledCart>
    );
}

const StyledCart = styled(motion.div)`
    padding: 30px 25px; 

    .cart {

        .cart-content {
            display: flex;
            flex-flow: column;
            gap: 50px;
        }

        padding: 10px 0;

        h2 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .no-items {
            background: var(--lighter-dark-blue);
            padding: 25px 0;
            display: flex;
            flex-flow: column;
            align-items: center;

            h3 {
                font-size: 2.3rem;
                color: var(--peach);
            }

            p {
                font-size: 1.5rem;
                padding: 25px 0;
                font-weight: bold;
                color: var(--orange);
            }

            .inspiration {
                border-radius: 5px;
            }
        }

        .cart-items {
            display: flex;
            gap: 25px;
            flex-flow: column;
        }

        .book-item {
            background: var(--lighter-dark-blue);
            color: var(--peach);
            padding: 25px;
            display: flex;
            justify-content: space-between;

            section {
                display: flex;
                gap: 25px;
                font-size: 1.3rem;

                .title {
                    font-weight: bold;
                }
                
                .author-and-date,
                .id {
                    opacity: .7;
                    font-size: 1.1rem;
                }

                .main {
                    display: flex;
                    flex-flow: column;
                    gap: 10px;

                    .read-time {

                        span {
                            font-weight: bold;
                        }
                    }
                }
            }

            .min-image {
                img {
                    height: 150px;
                    width: 100%;
                }
            }

            .additionnal-infos {

                button {
                    border: none;
                    color: var(--beige);
                    background: firebrick;
                    padding: 8px 10px;
                    font-size: 1.2rem;
                    font-family: "Source Code Pro";
                    font-weight: bold;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: .2s ease background;

                    &:hover {
                        background: crimson;
                    }
                }
            }

        }

        .validation {
            background: var(--lighter-dark-blue);
            padding: 25px 40px;
            display: flex;
            gap: 15px;
            flex-flow: column;
            text-align: center;
            
            p {
                font-size: 2rem;
                font-weight: bold;
                color: var(--orange);

                span {
                    color: var(--beige);
                    font-size: 1.5rem;
                }
            }

            button {
                background: #27b927e0;
                color: var(--beige);
                font-weight: bold;
                font-size: 1.5rem;
                font-family: inherit;
                border: 0;
                padding: 10px 15px;
                border-radius: 10px;
                cursor: pointer;
            }
        }


        @media screen and (max-width: 700px) {
            .book-item {
                flex-flow: column;
                gap: 10px;
            }
        }

    }
`;

export default withAnimation(Cart);