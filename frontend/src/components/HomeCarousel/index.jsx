import { HomeCarouselContainer, HomeCarouselContent } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import CarouselCard from "../CarouselCard";

const HomeCarousel = () => {

    const pagination = { clickable: true }

    const carouselsData = [
        {
            title: "Prepare-se para a evolução.",
            description: "Registre-se e garanta 5% OFF na compra do The Freestyle 2nd Gen.",
            button: "Registre-se",
            mobileImage: "https://images.samsung.com/is/image/samsung/assets/br/home/MO720x1080.png",
            desktopImage: "https://images.samsung.com/is/image/samsung/assets/br/home/PC-1440x640.png"
        },
        {
            title: "Prepare-se para a evolução.",
            description: "Registre-se e garanta 5% OFF na compra do The Freestyle 2nd Gen.",
            button: "Registre-se",
            mobileImage: "https://images.samsung.com/is/image/samsung/assets/br/home/MO720x1080.png",
            desktopImage: "https://images.samsung.com/is/image/samsung/assets/br/home/PC-1440x640.png"
        },
    ]

    return (
        <HomeCarouselContainer>
            <HomeCarouselContent>
                <Swiper
                    spaceBetween={0}
                    pagination={pagination}
                    modules={[Pagination]}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {carouselsData.map((data, key) => (
                        <SwiperSlide>
                            <CarouselCard key={key} carouselData={data} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </HomeCarouselContent>
        </HomeCarouselContainer>
    )
}

export default HomeCarousel;