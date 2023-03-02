import "./cart-dropdown.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";

const CartDropdown = () => {
    const navigate = useNavigate();
    const { cartItems, cartItemsCount, setIsCartOpen } =
        useContext(CartContext);

    const goToCheckoutHandler = () => {
        setIsCartOpen(false);
        navigate("/checkout");
    };

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {Object.values(cartItems).map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
                ))}
            </div>

            <Button onClick={goToCheckoutHandler} isDisabled={!cartItemsCount}>
                GO TO CHECKOUT
            </Button>
        </div>
    );
};

export default CartDropdown;
