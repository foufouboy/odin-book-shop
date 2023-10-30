import styled from "styled-components";
import { FaHeartbeat } from "react-icons/fa";
import { useState, useEffect } from "react";

const CategoryCard = ({data, isActive, handleCategoryClick}) => {
    const { title, icon, color, value } = data;

    return (
        <StyledCategoryCard 
        color={color} 
        className={isActive && "active"}
        data-value={value}
        onClick={(e) => handleCategoryClick(e)}>
            <div className="icon-container">
                {icon}
            </div>
            <h4>{title}</h4>
        </StyledCategoryCard>
    )
}

const StyledCategoryCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    padding: 10px;
    text-align: center;
    border-radius: 6px;
    background: ${props => props.color};
    cursor: pointer;
    gap: 3px;
    transition: 
        background .2s ease;

    h4 {
        font-weight: 800;
    }

    svg {
        --size: 30px;
        fill: var(--beige);
        width: var(--size);
        height: var(--size);

        path {
            stroke: var(--beige);
        }
    }

    .icon-container, h4 {
        pointer-events: none;
    }

    &.active {
        background: var(--dark-blue);
        border: 3px solid var(--beige);
    }
`
export default CategoryCard;

