import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HomeCategoriesContainer = styled(DefaultContainer)`
    flex-direction: column;
    padding: 0;

    .categories-container {
        display: flex;
        width: max-content;
        max-width: 100%;
        padding: var(--spacing-01);
        padding-bottom: var(--spacing-00);
        overflow-x: auto;
        overflow-y: hidden;
        ::-webkit-scrollbar{
            display: none;
        }
    }

    .swiper-container {
        width: fit-content;
    }
    
    @media(min-width: 1200px) {
        .categories-container {
            padding-left: calc((100vw - 1200px ) / 2);
            padding-right: calc((100vw - 1200px ) / 2);
        }
    }

    @media(min-width: 1800px) {
        .categories-container {
            padding-left: calc((100vw - 1400px ) / 2);
            padding-right: calc((100vw - 1400px ) / 2);
        }
    }
`

export const HomeCategoriesContent = styled(DefaultContent)`
    .categories-title {
        font-size: var(--title-01);
        font-weight: 600;
    }
`