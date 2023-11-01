import { useRef, useEffect } from "react";

const useFirstMount = (f, deps) => {
    const firstMount = useRef(true);

    useEffect(() => {
        firstMount.current = false;
    }, []);

    return firstMount.current;
}

export default useFirstMount;