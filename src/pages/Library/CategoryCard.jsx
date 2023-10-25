import styled from "styled-components";
import { FaHeartbeat } from "react-icons/fa";

const CategoryCard = ({data = null}) => {
    const { title, icon, color } = data;
    console.log(color);

    return (
        <StyledCategoryCard color={color}>
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
`
export default CategoryCard;

