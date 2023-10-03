import styled from "styled-components";

export const CarouselCardContainer = styled.div`
    background-color: var(--theme-01);
    background-image: url(${({ mobileImage }) => mobileImage});
    background-position: center;
    background-size: cover;

    @media(min-width: 1200px) {
        background-image: url(${({desktopImage}) => desktopImage});
    }
`

export const CarouselCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    gap: 20px;
    height: 70vh;
    color: white;
    text-align: center;

    .carousel-title {
        font-size: 40px;
        font-weight: 600;
        width: 90%;
    }

    .carousel-description {
        font-size: var(--text-00);
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 24px;
        width: 85%;
    }

    .carousel-button {
        display: flex;
        padding: 15px 30px;
        border-radius: 30px;
        font-weight: 500;
    }

    @media(min-width: 1200px) {
        justify-content: center;
        align-items: start;
        width: 50%;
        text-align: start;

        .carousel-title {
            font-size: 50px;
        }

        .carousel-description {
            width: 50%;
        }
    }
`