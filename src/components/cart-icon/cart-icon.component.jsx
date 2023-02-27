import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ ...otherProps }) => {
    return (
        <div {...otherProps} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
