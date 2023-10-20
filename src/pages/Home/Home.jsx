import styled from "styled-components";
import Icon from "../../assets/Home/icon.svg";
import AsideImage from "../../assets/Home/home-bg.jpg";

const Home = () => {
    return (
        <StyledHome>
            <div className="hero">
                <header>
                    <div className="title">
                        <img src={Icon} alt="site icon"/>
                        <h1>Babel. </h1>
                    </div>
                    <button>Get in</button>
                </header>
                <p className="app-description">Book manager & Book shop</p>
                <h2 className="phrase">
                    The easiest way to enjoy your books.
                </h2>
                <footer>
                    <p>Welcome to the most <i>infinite</i> library of your dreams. You'll never want to get out.</p>
                    <button>Enter the library</button>
                </footer>
            </div>
            <img src={AsideImage} alt="babel library" />
        </StyledHome>       
    );
}

const StyledHome = styled.div`
    background-color: var(--dark-blue);
    color: var(--beige);
    display: grid;
    grid-template-columns: 3fr 2fr;
    padding: 30px;
    height: 100%;
    min-height: 100vh;
    cursor: default;

    .hero {
        display: flex;
        flex-flow: column;
        padding: 15px 30px;
        grid-column: 1 / 2;
    }

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 150px;
        align-items: center;
        gap: 30px;
    }

    h1 {
        font-size: 2.5rem;
    }

    .title {
        display: flex;
        gap: 15px;
        align-items: center;
        cursor: pointer;

        img {
            height: 40px;
        }
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        margin-top: 100px;

        p {
            width: 50%;
            font-size: 1.1rem;
            font-weight: bold;
        }
    }

    .app-description {
        font-weight: 600;
        text-transform: uppercase; 
        letter-spacing: 1px;
        border: 3px solid var(--beige);
        padding: 3px 15px;
        align-self: flex-start;
        margin-bottom: 15px;
    }

    .phrase {
        font-size: 5rem;
        line-height: 1;
        margin-bottom: auto;
    }

    &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 
            10px 10px var(--dark-grey);
    }

    button {
        font-family: inherit;
        font-weight: bold;
        font-size: 1.3rem;
        background: var(--dark-blue);
        color: var(--peach);
        border: 3px solid var(--peach);
        border-radius: 15px;
        padding: 4px 20px;
        cursor: pointer;
        transition: all ease .4s;
        
        &:hover {
            color: var(--dark-blue);
            background: var(--peach);
        }
    }

    footer button {
        padding: 6px 20px;
    }
`;

export default Home;