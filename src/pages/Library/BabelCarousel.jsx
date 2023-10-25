import styled from "styled-components";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import { 
    BiSolidChevronRight,
    BiSolidChevronLeft,
} from "react-icons/bi";
import "pure-react-carousel/dist/react-carousel.es.css";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { useEffect, useState } from "react";

const getVisibleSlides = (width) => {
    return width < 768 ? 3 
        : width < 1000 ? 6 
        : 8; 
}


const BabelCarousel = () => {
    const [visibleSlides, setVisibleSlides] = useState();
    const { width, height } = useWindowDimensions();
    console.log(visibleSlides);

    useEffect(() => {
        setVisibleSlides(getVisibleSlides(width));
    }, [width]);


    return (
        <StyledBabelCarousel>
            <CarouselProvider
            naturalSlideHeight={50}
            naturalSlideWidth={40}
            totalSlides={10}
            visibleSlides={visibleSlides}
            dragEnabled={true}
            isIntrinsicHeight={true}>
                <div className="category-and-buttons">
                    <h3>Categories</h3> 
                    <div className="buttons">
                        <ButtonBack><BiSolidChevronLeft size="23px"/></ButtonBack>
                        <ButtonNext><BiSolidChevronRight size="23px"/></ButtonNext>
                    </div>
                </div>
                <Slider classNameTray="slides-container">
                        <Slide index={0}><p>I am.</p></Slide>
                        <Slide index={1}><p>I am.</p></Slide>
                        <Slide index={2}><p>I am.</p></Slide>
                        <Slide index={3}><p>I am</p></Slide>
                        <Slide index={4}><p>I am.</p></Slide>
                        <Slide index={5}><p>I am.</p></Slide>
                        <Slide index={6}><p>I am.</p></Slide>
                        <Slide index={7}><p>I am.</p></Slide>
                        <Slide index={8}><p>I am.</p></Slide>
                        <Slide index={9}><p>I am.</p></Slide>
                </Slider>
            </CarouselProvider>
        </StyledBabelCarousel>
    );
}

const StyledBabelCarousel = styled.div`
    margin-top: 30px;

    p {
        padding: 20px;
        background: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slides-container {
        gap: 10px;
    }
    .category-and-buttons {
        display: flex;
        justify-content: space-between;

        h3 {
            font-size: 1.7rem;
        }

        .buttons {
            display: flex;
            gap: 5px;
        }

        button {
            background: none;
            outline: none;
            border: 0;

            svg {
                fill: var(--beige);

                &:hover {
                    fill: var(--orange);
                }
            }

        }
    }
`;

export default BabelCarousel;