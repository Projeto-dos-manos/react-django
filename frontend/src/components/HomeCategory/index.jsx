import { HomeCategoriesContainer, HomeCategoriesContent, HomeCategoryContainer, HomeCategoryContent } from "./styles";

const HomeCategory = ({categoryData}) => {
    return (
        <HomeCategoryContainer>
            <HomeCategoryContent categoryImage={categoryData.url_image}>
                <figure className="category-image"></figure>
                <h2 className="category-name">{categoryData.name}</h2>
            </HomeCategoryContent>
        </HomeCategoryContainer>
    )
}

export default HomeCategory;