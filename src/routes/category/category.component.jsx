import {
    CategoryContainer,
    CategoryTitle,
    ProductCardsContainer,
} from "./category.styles";

import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
    const { category } = useParams();
    const { categories } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categories[category]);

    useEffect(() => {
        const categoryProducts = categories[category];
        setProducts(categoryProducts);
    }, [category, categories]);

    return (
        <CategoryContainer>
            <CategoryTitle>{category}</CategoryTitle>

            <ProductCardsContainer>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </ProductCardsContainer>
        </CategoryContainer>
    );
};

export default Category;
