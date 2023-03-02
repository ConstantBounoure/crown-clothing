import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";

const CartIcon = ({ ...otherProps }) => {
    const { cartItemsCount } = useContext(CartContext);

    return (
        <div {...otherProps} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className="item-count">{cartItemsCount}</span>
        </div>
    );
};

export default CartIcon;
