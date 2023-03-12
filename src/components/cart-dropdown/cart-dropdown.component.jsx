import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from "./cart-dropdown.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";

const CartDropdown = () => {
    const navigate = useNavigate();
    const { cartItems, cartItemsCount, setIsCartOpen } =
        useContext(CartContext);

    const isDisabled = !cartItemsCount;
    const buttonType = isDisabled
        ? BUTTON_TYPE_CLASSES.disabled
        : BUTTON_TYPE_CLASSES.base;

    const goToCheckoutHandler = () => {
        setIsCartOpen(false);
        navigate("/checkout");
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {isDisabled ? (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                ) : (
                    Object.values(cartItems).map((cartItem) => (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                        ></CartItem>
                    ))
                )}
            </CartItems>

            <Button
                buttonType={buttonType}
                onClick={goToCheckoutHandler}
                isDisabled={isDisabled}
            >
                GO TO CHECKOUT
            </Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
