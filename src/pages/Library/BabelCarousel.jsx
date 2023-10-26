import styled from "styled-components";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { 
    BiSolidChevronRight,
    BiSolidChevronLeft,
} from "react-icons/bi";
import CategoryCard from "./CategoryCard";
import categoriesData from "./category-cards-data";
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

    useEffect(() => {
        setVisibleSlides(getVisibleSlides(width));
    }, [width]);


    return (
        <StyledBabelCarousel>
            <CarouselProvider
            naturalSlideHeight={50}
            naturalSlideWidth={50}
            totalSlides={10}
            visibleSlides={visibleSlides}
            dragEnabled={true}
            isIntrinsicHeight={true}>
                <div className="category-and-buttons">
                    <h3>Categories</h3> 
                    <div className="buttons">
                        <ButtonBack><BiSolidChevronLeft size="20px"/></ButtonBack>
                        <ButtonNext><BiSolidChevronRight size="20px"/></ButtonNext>
                    </div>
                </div>
                <Slider classNameTray="slides-container">
                    {categoriesData.map((data, i) => (
                        <Slide index={i} key={i}>
                            <CategoryCard data={data}/>
                        </Slide>
                    ))}
                </Slider>
            </CarouselProvider>
        </StyledBabelCarousel>
    );
}

const StyledBabelCarousel = styled.div`
    margin-top: 30px;
    .slides-container {
        gap: 15px;
    }

    .category-and-buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        h3 {
            font-size: 1.4rem;
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