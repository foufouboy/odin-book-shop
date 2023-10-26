import styled from "styled-components";
import { 
    Link,
    useNavigate,
 } from "react-router-dom";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import Aside from "../../assets/Home/aside-0.jpg";
import withAnimation from "../../components/withAnimation";

const Home = () => {
    const navigate = useNavigate();

    return (
        <StyledHome
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}>
            <div className="home-root">
                <div className="hero">
                    <header>
                        <Title/>
                        <Button
                        onClick={() => navigate("/library")}>
                                Get in
                        </Button>
                    </header>
                    <p className="app-description">Book manager & Book shop</p>
                    <h2 className="phrase">
                        The easiest way to enjoy your books.
                    </h2>
                    <footer>
                        <p>Welcome to the most <i>infinite</i> library of your dreams. You'll never want to get out.</p>
                        <Button
                        onClick={() => navigate("/library")}>
                                Enter the library
                        </Button>
                    </footer>
                </div>
                <img src={Aside} 
                alt={"illustration image"}/>
            </div>
        </StyledHome>       
    );
}

const StyledHome = styled(motion.div)`
    cursor: default;

    .home-root {
        display: grid;
        grid-template-columns: 3fr 2fr;
        padding: 30px;
        height: 100%;
        min-height: 100vh;

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            box-shadow: 
                10px 10px var(--dark-grey);
        }
    }

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

    @media (max-width: 1000px) {
        footer {
            flex-flow: column;
            text-align: center;

            button {
                width: 100%;
            }
        }
    }

    @media (max-width: 900px) {
        .home-root {
            grid-template-columns: 1fr;
            grid-template-rows: 200px 1fr;
            padding: 0;
            align-items: center;

            & > img {
                grid-row: 1 / 2;
                box-shadow: unset;
                padding: 0;
            }
        }

        .hero {
            align-items: center;
        }

        .phrase {
            text-align: center;
            font-size: 3.8rem;
        }

        .hero > p {
            align-self: initial;
        }

        header {
            margin-top: 30px;
            margin-bottom: 80px;
        }
        
        footer {
            margin-top: 90px;
        }
    }
`;

export default withAnimation(Home);