import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DescriptionAccordion = ({children}) => {
    const [active, setActive] = useState(false);
    const [isOverflown, setIsOverflown] = useState(false);

    useEffect(() => {
        const {scrollHeight, clientHeight} = document.querySelector("p");
        setIsOverflown(scrollHeight > clientHeight);
        console.log(scrollHeight > clientHeight);
    }, [])

    return (
        <StyledDescriptionAccordion>
            {isOverflown ? (
                <div 
                className="click-to-expand active"
                onClick={() => setActive(!active)}>
                    <h3>Description</h3>
                    <FaChevronDown size={"20px"} className={"chevron" + (active ? " active" : " unactive")}/>
                </div>
            ) : (
                <div 
                className="click-to-expand">
                    <h3>Description</h3>
                </div>
            )}
            <div className="wrapper">
                <div>
                    <p className={active ? "active" : ""}>
        The first novel in nearly twenty years from the acclaimed actor/writer/director is a book about art and love, fame and heartbreak--a blistering story of a young man making his Broadway debut in Henry Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae iure vitae dolorem laboriosam harum, alias delectus animi, unde veritatis sed ab cumque dicta quis sequi saepe a! Iure, nesciunt laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus nulla officiis cumque qui nesciunt magni blanditiis, suscipit placeat cum consequuntur, quae, aliquid soluta quos aut debitis officia expedita harum voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex nam placeat officiis, atque mollitia eius possimus exercitationem quod dolor non magni ab cumque explicabo illum amet nisi id veniam, reprehenderit molestias eveniet. Officia error placeat unde neque excepturi dicta doloribus quis quisquam nostrum, recusandae, molestiae veritatis sapiente, suscipit tempora.
                    </p>
                    {(active || !isOverflown) ? "" : <span>...</span>}
                </div>

            </div>
        </StyledDescriptionAccordion>
    )
}

const StyledDescriptionAccordion = styled.div`
    .click-to-expand {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
        gap: 50px;
        cursor: pointer;

        h3 {
            font-size: 1.4rem;
            color: var(--peach);
        }

        .chevron.active {
            transform: rotate(180deg);
            transition: transform .4s;
        }

        .chevron.unactive {
            transform: rotate(0deg);
            transition: transform .4s;
        }
    }

    .click-to-expand.active {
        cursor: pointer;
    }

    
    .wrapper {
        display: flex;
        p {
            max-height: 90px;
            overflow-y: hidden;
            text-align: justify;
            transition: max-height .4s;
        }

        p.active {
            max-height: 100%;
        }
    }
`;

export default DescriptionAccordion;