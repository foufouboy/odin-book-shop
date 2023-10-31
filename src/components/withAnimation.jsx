import { AnimatePresence } from "framer-motion";

const withAnimation = (Component) => {
    return function Animated(props) {
        return (
            <AnimatePresence>
                <Component {...props}/>
            </AnimatePresence>
        );
    } 
};

export default withAnimation;