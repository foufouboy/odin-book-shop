import styled from "styled-components";
import { motion } from "framer-motion";
import withAnimation from "../../components/withAnimation";

const Cart = () => {
    return (
        <StyledCart
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -25 }}>
            Cart Page
        </StyledCart>
    );
}

const StyledCart = styled(motion.div)`
    
`;

export default withAnimation(Cart);