import styled from "styled-components";
import { useState } from "react";

const Image = ({src, alt}) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <StyledLoading/>}
            <img 
            src={src} 
            alt={alt} 
            onLoad={() => setLoading(false)}
            style={loading ? {display: "none"} : {}}/>
        </>
    );
}

const StyledLoading = styled.div`
    background: var(--dark-grey);
    animation: 1.5s ease infinite image-loading;
    aspect-ratio: 2 / 3;

    @keyframes image-loading {
        from {
            opacity: .8;
        }

        50% {
            opacity: .3;
        }

        to {
            opacity: .8;
        }
    }
`;

export default Image;