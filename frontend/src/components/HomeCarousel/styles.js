import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HomeCarouselContainer = styled(DefaultContainer)`
    padding-top: 40px;
    padding-bottom: 40px;
`

export const HomeCarouselContent = styled(DefaultContent)`    
    .swiper-pagination-bullet {
        background-color: white;
        opacity: 0.7;
    }

    .swiper-pagination-bullet-active {
        opacity: 1;
    }
    
    @media(min-width: 1200px) {}
`