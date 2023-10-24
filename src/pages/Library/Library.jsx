import styled from "styled-components";
import Title from "../../components/Title";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BiSolidBookHeart } from "react-icons/bi";
import { motion } from "framer-motion";
import withAnimation from "../../components/withAnimation";

const Library = () => {
    return (
        <StyledLibrary
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}
        >
            <header>
                <Title animate={false}/>
                <div className="search-container">
                    <input
                    type="text" 
                    className="search-bar"
                    placeholder="Search for a book..."/>
                    <AiOutlineFileSearch 
                    size="22px"/>
                </div>
                <div className="cart-container">
                    <BiSolidBookHeart
                    size="32px"/>
                    <span></span>
                </div>
            </header>
        </StyledLibrary>
    );
}

const StyledLibrary = styled(motion.div)`
    header {
        display: grid;
        grid-template-columns: auto 1fr auto;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
        padding: 45px 45px;

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

        input:focus + svg {
            fill: var(--beige);
        }

        .cart-container {
            display: flex;
            align-items: center;
            position: relative;


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
                background:#18B0AB;
                width: 6px;
                height: 6px;
                border-radius: 100%;
            }
        }
    }

@media (max-width: 750px) {
    header {
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

}

`

export default withAnimation(Library);