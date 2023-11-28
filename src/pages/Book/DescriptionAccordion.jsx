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
                        {children}
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