import "./checkout-total.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CheckoutTotal = () => {
    const { cartItemsTotalPrice } = useContext(CartContext);

    return (
        <div className="checkout-total-container">
            <span>TOTAL: ${cartItemsTotalPrice}</span>
        </div>
    );
};

export default CheckoutTotal;
