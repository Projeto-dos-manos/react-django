import HomeCategory from "../HomeCategory";
import { HomeCategoriesContainer, HomeCategoriesContent } from "./styles";

const HomeHighlights = () => {

    const categories = [
        {
            name: "Smartphones",
            url_image: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/09/iphone-15-pro.png"
        },
        {
            name: "Notebooks",
            url_image: "https://i.dell.com/is/image/DellContent/content/dam/images/products/laptops-and-2-in-1s/alienware/m16-non-touch/awm16nt-xnb-17-bk.psd?fmt=png-alpha&wid=4419&hei=3009"
        },
        {
            name: "Periféricos",
            url_image: "https://www.logitechstore.com.br/media/catalog/product/k/i/kit15487.png"
        },
        {
            name: "Componentes",
            url_image: "https://gamernareal.com.br/wp-content/uploads/2022/11/834_gallery_ba02.png"
        },
        {
            name: "Desktops",
            url_image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/category-pages/cs2303g0014-616587-gl-cs-co-fy23q4-banner-aw-r15-bk-intel-site-banner-800x620.png"
        },
        {
            name: "Consoles",
            url_image: "https://images.squarespace-cdn.com/content/v1/5f04872f42da2c339824ac18/1605657329760-8C2L33923JLLEAXWNPC8/FWT+Episode+Cover+Art.png"
        }
    ]

    return (
        <HomeCategoriesContainer>
            <HomeCategoriesContent>
                <h1 className="categories-title">Categorias</h1>

                <div className="categories-container">
                    {categories.map((category, key) => <HomeCategory key={key} categoryData={category} />)}
                </div>
            </HomeCategoriesContent>
        </HomeCategoriesContainer>
    )
}

export default HomeHighlights;