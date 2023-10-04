import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HomeCategoriesContainer = styled(DefaultContainer)``

export const HomeCategoriesContent = styled(DefaultContent)`

    .categories-container {
        display: flex;
        width: max-content;
        max-width: 100%;
        padding-top: var(--spacing-01);
        padding-bottom: var(--spacing-0);
        gap: 20px;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .categories-title {
        font-size: var(--title-01);
        font-weight: 600;
    }
`