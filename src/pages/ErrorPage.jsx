import styled from "styled-components";
import Title from "../components/Title";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <StyledErrorPage className="error-page">
            <Title animate={false}/>
            <h2><i>Oops!<br/></i> An error happened!</h2>
            <p>(You can go back to the home clicking the title.)</p>
            <p className="error">{error.statusText || error.message}</p>
        </StyledErrorPage>
    );
}

const StyledErrorPage = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    color: var(--peach);


    h2 {
        font-size: 3rem;
        margin-top: 20px;
        margin-bottom: 5px;
    }

    p.error {
        font-size: 1.2rem;
        background: var(--dark-grey);
        padding: 5px 10px;
        border: 1px solid black;
        font-family: "Source Code Pro";
        cursor: default;
        margin-top: 15px;
        color: var(--beige);
    }
`

export default ErrorPage;