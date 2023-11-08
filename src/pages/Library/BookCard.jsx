import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { truncate } from "../../utils/misc-utils";
import Image from "../../components/Image";
import Sample from "../../assets/Home/aside-2.jpeg";

const BookCard = ({book, onClick}) => {
    const { title, author, rating, coverImg, firstPublish } = book;


    return (
        <StyledBookCard onClick={onClick}>
            <Image src={coverImg} alt="sample img"/>         
            <div className="book-info">
                <p className="title">{truncate(title)}</p>
                <p className="author">{truncate(author)}</p>
                <p className="first-publish">
                    {firstPublish}
                </p>
            </div>
        </StyledBookCard>
    );
}

const StyledBookCard = styled.div`
    display: flex;
    flex-flow: column;
    gap: 10px;
    cursor: pointer;
    transition: transform .2s ease;

    &:hover {
        transform: scale(1.1);
    }
    
    img {
        aspect-ratio: 2 / 3;
        object-fit: cover;
        border-radius: 8px;
        width: 100%;
    }

    .book-info {
        display: flex;
        flex-flow: column;
        gap: 5px;
    }

    .first-publish {
        font-family: "Source Code Pro";
        font-weight: bold;
    }

    .title {
        font-size: 1.3rem;
        font-weight: 800;
        color: var(--peach);
        margin-bottom: -3px;
    }

    .author {
        opacity: .8;
        font-size: 1.1rem;
        font-family: "Source Code Pro"
    }

    .rating {
        svg {
            --size: 22px;
            width: var(--size);
            height: var(--size);
        }
    }

    @media (max-width: 500px) {
        .title {
            font-size: 1.1rem;
        }

        .author {
            font-size: 1rem;
        }

        .rating {
            svg {
                --size: 17px;
                width: var(--size);
                height: var(--size);
            }
        }
    }
`;

export default BookCard;