import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import withAnimation from "../../components/withAnimation";
import DescriptionAccordion from "./DescriptionAccordion";
import Image from "../../components/Image";
import Sample from "../../assets/book-sample.jpg";
import { FaStar } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { FiArrowLeft } from "react-icons/fi";

function createRatingStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FaStar color="yellow"/>); 
        } else {
            stars.push(<FaStar color="grey"/>); 
        }
    }
    return stars;
}

function getBookData(id, booksData) {
    const bookData = booksData.find(book => book.id === id);
    if (!bookData) {
        throw Error("No matching book for that id!");
    } else {
        return bookData;
    }
}

function isSaved(savedBooks, id) {
    return savedBooks.some(book => book.id === id);
}

const Book = ({ booksData, setSavedBooks, savedBooks }) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const book = getBookData(id, booksData);
    const stars = createRatingStars(book.rating);
    const checked = isSaved(savedBooks, id);

    const saveBook = () => {
        setSavedBooks(prev => [...prev, book]);
        console.log(savedBooks);
    }

    const unsaveBook = () => {
        setSavedBooks(prev => prev.filter(book => book.id !== id));
        console.log(savedBooks);
    }

    return (
        <StyledBook 
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}
        >
            <button 
            className="back-to-library"
            onClick={() => navigate("/library/")}>
                <span><IoLibrary/></span>
                <span className="arrow"><FiArrowLeft/></span>
            </button>
            <div className="book-page">
                <div className="main-section">
                    <div className="book-img">
                        <Image src={book.coverImg} alt="book image" />
                    </div>
                    <div className="book-caracteristics">
                        <div className="main-caract">
                            <h2 className="title">{book.title}</h2>
                            <div className="author-and-date">
                                <h3 className="author">— {book.author}</h3>
                                <h3 className="first-publish">{book.firstPublish}</h3>
                            </div>
                            <div className="rating">
                                {stars.map((star, index) => (
                                    <span key={index}>{star}</span>
                                ))}
                            </div>
                        </div>
                        <button 
                        className={"wanna-read" + (checked ? " checked" : "")}
                        onClick={() => {
                            checked ? unsaveBook() : saveBook();
                        }}>
                            {checked ? "Book in list!" : "Add to list"}
                        </button>
                        <DescriptionAccordion>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod eius iure voluptas ab eos deserunt exercitationem consequatur velit, dicta incidunt dolor nostrum, sed numquam quidem, amet sit adipisci sapiente obcaecati! Consectetur facere dolores quis, laborum porro, explicabo corporis nihil sequi ab enim alias similique cumque praesentium amet et nemo? Aut illum sed nostrum minima quasi consequuntur velit, animi quidem. Obcaecati?
                        </DescriptionAccordion>
                    </div>
                </div>
            </div>
        </StyledBook>
    );
}

const StyledBook = styled(motion.div)`
    .back-to-library {
        background: 0;
        outline: 0;
        border: inherit;
        padding: 8px 0;
        cursor: pointer;
        display: flex;
        gap: 8px;
        align-items: center;

        color: inherit;
        svg {
            --size: 25px;
            width: var(--size);
            height: var(--size);
        }

    }
    .book-page {
        background: #002A48;
        padding: 30px;
    }

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
        border-radius: 15px;
        padding: 15px 30px;
        font-size: 1.5rem;
        font-family: inherit;
        font-weight: 900;
        color: var(--beige);
        transition: .2s ease all;
        background: #001524;
        color: #fde5d488;

            &.checked {
                background: #18B0AB;
                color: var(--beige);
            }

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

            .book-img {
                img {
                    max-width: 300px;
                }
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