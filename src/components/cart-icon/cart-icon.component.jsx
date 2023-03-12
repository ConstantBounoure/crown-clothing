import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";

const CartIcon = ({ ...otherProps }) => {
    const { cartItemsCount } = useContext(CartContext);

    return (
        <CartIconContainer {...otherProps}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <ItemCount>{cartItemsCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
