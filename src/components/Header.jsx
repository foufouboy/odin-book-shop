import styled from "styled-components";
import Title from "./Title";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BiSolidBookHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = ({searchRef, querySubmit, onQueryChange, query, savedBooks}) => {
    const navigate = useNavigate();

    return (
        <StyledHeader>
            <Title animate={false}/>
            <div className="search-container">
                <input
                type="text" 
                className="search-bar"
                placeholder="Search for a book..."
                ref={searchRef}
                value={query}
                onChange={(e) => onQueryChange(e)}
                onKeyDown={(e) => {
                    e.key === "Enter" && querySubmit();
                }}/>
                <AiOutlineFileSearch size="22px" onClick={querySubmit}/>
            </div>
            <button className="cart-container" onClick={() => navigate("/cart")}>
                <BiSolidBookHeart size="32px"></BiSolidBookHeart>
                <span className={savedBooks.length ? "active" : "unactive"}></span>
            </button>
        </StyledHeader>

    );
}

const StyledHeader = styled.header`

display: grid;
grid-template-columns: auto 1fr auto;
justify-content: space-between;
justify-items: center;
align-items: center;
margin-bottom: 30px;

.search-container {
    position: relative;
    width: 70%;

    svg {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        fill: rgb(150, 150, 150, .5); 
    }
}

svg {
    transition: fill .2s ease;
}

input {
    font-family: "Source Code Pro";
    color: var(--beige);
    font-size: 1.1rem;
    padding: 8px 35px;
    width: 100%;
    padding-left: 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: rgb(100, 100, 100, .8);
}

input:focus + svg,
.search-container svg:hover {
    fill: var(--beige);
}

.cart-container {
    display: flex;
    align-items: center;
    position: relative;
    background: 0;
    border: 0;


    svg {
        fill: var(--beige);
    }

    svg:hover {
        cursor: pointer;
        fill: var(--orange);
    }

    span {
        position: absolute;
        top: -14%;
        right: -14%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 6px;
        height: 6px;
        border-radius: 100%;

        &.active {
            background:#18B0AB;
        }
    }
}

@media (max-width: 750px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
    justify-content: space-between;

    .search-container {
        grid-row: 2 / 3;
        grid-column: 1 / 3;
        width: 100%;
    }

    .title {
        justify-self: start;
    }

    .cart-container {
        justify-self: end;
    }
}
`

export default Header;