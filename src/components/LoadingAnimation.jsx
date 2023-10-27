import Icon from "../assets/Home/icon.svg";
import styled from "styled-components";

const LoadingAnimation = () => {
    return (
        <StyledLoadingAnimation>
            <img src={Icon} alt="loading icon" />
        </StyledLoadingAnimation>
    );
}

const StyledLoadingAnimation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 50px 0;
    img {
        --size: 100px;
        animation: 2s infinite loading;
        width: var(--size);
        height: var(--size);
    }

    @keyframes loading {
        from {
            opacity: 1;
        }

        50% {
            opacity: .5;
        }

        to {
            opacity: 1;
            transform: rotate(360deg);
        }
    }
`;

export default LoadingAnimation;