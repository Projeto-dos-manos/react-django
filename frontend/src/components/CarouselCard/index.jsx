import { CarouselCardContainer, CarouselCardContent } from "./styles";

const CarouselCard = ({carouselData}) => {

    const { mobileImage, desktopImage } = {...carouselData}

    return (
        <CarouselCardContainer mobileImage={mobileImage} desktopImage={desktopImage}>
            <CarouselCardContent>
                <h1 className="carousel-title">{carouselData.title}</h1>
                <h3 className="carousel-description">{carouselData.description}</h3>
                <button className="carousel-button">{carouselData.button}</button>
            </CarouselCardContent>
        </CarouselCardContainer>
    )
}

export default CarouselCard;