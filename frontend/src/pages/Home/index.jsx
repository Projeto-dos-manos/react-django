import DefaultPageComponent from "../../components/DefaultPageComponent";
import HomeCarousel from "../../components/HomeCarousel";
import HomeCategories from "../../components/HomeCategories";
import HomeHighlights from "../../components/HomeHighlights";

const Home = () => {
    return(
        <DefaultPageComponent>
            <HomeCarousel />
            <HomeCategories />
            <HomeHighlights />
        </DefaultPageComponent>
    )
}

export default Home;