import styled from "styled-components";
import Image from "../../assets/Home/aside-3.jpeg";
import Button from "../../components/Button";

const Description = ({toggleHandler}) => {
    return (
        <StyledDescription>
            <div className="desc-container">
                <h2>
                    Build your library
                </h2>
                <p>
                    Make yourself a human-sized stack of books to read,
                    here and <i>nowhere</i> else. Search for books, filter giving a genre or by popularity, and get that one book that will eat you alive.
                </p>
                <Button onClick={toggleHandler}>
                    Got it!
                </Button>
            </div>
            <img src={Image} alt="cat image" />
        </StyledDescription>
    );
}

const StyledDescription = styled.div`
    background: RGB(0, 51, 87, .7);
    width: 100%;
    border-radius: 20px;
    padding: 50px;
    display: flex;
    align-items: center ;
    justify-content: center;
    gap: 8%;

    .desc-container {
        display: flex;
        flex-flow: column;
        gap: 25px;
        width: 50%;
    }

    h2 {
        font-size: 3.5rem;
    }

    p {
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--peach);
        opacity: .9;
    }

    button {
        align-self: start;
        border: none;
        padding: 8px 30px;
    }

    img {
        height: 400px;
        width: 40%;
        object-fit: cover;
        border-radius: 30px;
        opacity: .8;
    }

    @media (max-width: 750px) {
        flex-flow: column-reverse;
        align-items: center;
        padding: 0;

        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }

        img {
            height: 150px;
            object-fit: cover;
            width: 100%;
            border-radius: inherit;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        .desc-container {
            width: 100%;
            gap: 20px;
            align-items: center;
            text-align: center;
            padding: 30px;
            padding-top: 20px;

            button {
                width: 100%;
            }
        }
    }
`;

export default Description;