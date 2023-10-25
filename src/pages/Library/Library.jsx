import styled from "styled-components";
import Header from "./Header";
import BabelCarousel from "./BabelCarousel";
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
            <Header/>
            <BabelCarousel/>
        </StyledLibrary>
    );
}

const StyledLibrary = styled(motion.div)`
    padding: 45px 45px;
`

export default withAnimation(Library);