import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const FilterDropdown = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Popularity");

    const handleOptionClick = (e) => {
        console.log("in");
        console.log(e.target.textContent);
        setValue(e.target.textContent);
        setOpen(false);
    }

    const handleSelectClick = (e) => {
        if (e.currentTarget.contains(e.relatedTarget)) return;
        setOpen(false);
    }

    return (
        <StyledFilterDropdown
        onBlur={(e) => handleSelectClick(e)}>
            <Button onClick={() => setOpen(!open)}>
                Order by: <span>{value}</span>
            </Button>
            {open && (
                <ul>
                    <li><Button onClick={(e) => handleOptionClick(e)}>Popularity</Button></li>
                    <li><Button onClick={(e) => handleOptionClick(e)}>Name</Button></li>
                    <li><Button onClick={(e) => handleOptionClick(e)}>Date</Button></li>
                    <li><Button onClick={(e) => handleOptionClick(e)}>Rating</Button></li>
                </ul>
            )}
        </StyledFilterDropdown>
    )
}

const StyledFilterDropdown = styled.div`
    width: 200px;
    position: relative;

    ul {
        position: absolute;
        z-index: 5;
        top: 0;
        left: 0;
        width: 100%;
        list-style: none;
        background: var(--dark-blue);
        display: flex;
        flex-flow: column;
        align-items: start;
        padding: 8px 10px;
        gap: 5px;
        border-radius: 10px;

        li {
            width: 100%;
        }

        button {
            border: 0;
            font-size: 1.1rem;
            border-radius: 7px;
            width: 100%;
            text-align: left;
            padding-left: 5px;
            cursor: pointer;
            transition: background .3s ease;
        }
    }

    & > button {
        cursor: pointer;
        width: 100%;
        border: none;
        font-family: inherit;
        border-radius: 10px;
        padding: 5px 10px;
        text-align: left;
        font-size: 1.1rem;

        span {
            font-family: "Source Serif 4";
            font-weight: bold;
            font-style: italic;
            font-size: 1.2rem;
        }
    }
`;

export default FilterDropdown;