import { CheckoutTotalContainer } from "./checkout-total.styles";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CheckoutTotal = () => {
    const { cartItemsTotalPrice } = useContext(CartContext);

    return (
        <CheckoutTotalContainer>
            <span>TOTAL: ${cartItemsTotalPrice}</span>
        </CheckoutTotalContainer>
    );
};

export default CheckoutTotal;
