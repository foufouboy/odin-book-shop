import { AnimatePresence } from "framer-motion";

const withAnimation = (Component) => {
    const Animated = () => (
        <AnimatePresence>
            <Component/>
        </AnimatePresence>
    );

    return Animated;
};

export default withAnimation;