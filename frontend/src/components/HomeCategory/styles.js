import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HomeCategoryContainer = styled.div`
    min-width: 230px;
    padding: var(--spacing-01);
    padding-bottom: var(--spacing-00);
    border-radius: 20px;
    background-color: white;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.10);
`

export const HomeCategoryContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .category-image {
        width: 100%;
        height: 225px;
        background-image: url(${({categoryImage}) => categoryImage});
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .category-name {
        font-size: var(--title-02);
        font-weight: 600;
    }
`