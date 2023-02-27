import "./cart-dropdown.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {Object.values(cartItems).map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
