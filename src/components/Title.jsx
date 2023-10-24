import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { combineLetters } from "../pages/Home/home-functions";
import Icon from "../assets/Home/icon.svg";

const Title = ({animate = true}) => {
    const [title, setTitle] = useState("Babel.");
    const [titleInterval, setTitleInterval] = useState(null);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!animate) return;
        if (hover) {
            const interval = setInterval(() => {
                setTitle(combineLetters());
            }, 50)
            setTitleInterval(interval);
        } else {
            if (titleInterval) {
                clearInterval(titleInterval);
                setTitleInterval(null);
                setTitle("Babel.");
            }
        }
    }, [hover]);

    return (
        <StyledTitle 
        className="title"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => navigate("/")}
        >
            <img src={Icon} alt="site icon"/>
            <h1>{title} </h1>
        </StyledTitle>
    );
}

const StyledTitle = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    cursor: pointer;
    color: var(--beige);

    img {
        height: 40px;
    }

    h1 {
        font-size: 2.5rem;
    }
`;

export default Title;