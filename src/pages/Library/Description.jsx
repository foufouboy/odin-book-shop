import styled from "styled-components";

const Description = () => {
    return (
        <StyledDescription>
            <h2>
                Build your library
            </h2>
            <p>
                Make yourself a human-sized stack of books to read,
                here and <i>nowhere</i> else. <br/>Search for books, filter giving a genre or by popularity, and get that one book that will eat you alive.
            </p>
        </StyledDescription>
    );
}

const StyledDescription = styled.div`
    background: RGB(0, 51, 87, .7);
    width: 100%;
    border-radius: 20px;
    padding: 50px;

    h2 {
        font-size: 3.2rem;
        margin-bottom: 15px;
    }

    p {
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--peach);
        opacity: .9;
    }

    @media (max-width: 750px) {
        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }
    }
`;

export default Description;