import styled from "styled-components";

const Button = ({children, onClick}) => {
    return (
        <StyledButton onClick={(e) => onClick(e)}>
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    font-family: inherit;
    font-weight: bold;
    font-size: 1.3rem;
    background: var(--dark-blue);
    color: var(--peach);
    border-radius: 15px;
    border: 3px solid var(--peach);
    padding: 4px 20px;
    cursor: pointer;
    transition: all ease .4s;
    
    &:hover {
        color: var(--dark-blue);
        background: var(--peach);
    }
`

export default Button;