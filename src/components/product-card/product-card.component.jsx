import {
    ProductCartContainer,
    ProductImg,
    ProductButton,
    Footer,
    Name,
    Price,
} from "./product-card.styles";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const clickHandler = () => {
        addItemToCart(product);
    };

    return (
        <ProductCartContainer>
            <ProductImg src={imageUrl} alt={name} />

            <ProductButton
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={clickHandler}
            >
                ADD TO CART
            </ProductButton>

            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
        </ProductCartContainer>
    );
};

export default ProductCard;
