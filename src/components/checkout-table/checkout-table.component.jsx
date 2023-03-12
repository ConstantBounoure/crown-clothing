import {
    CheckoutTableContainer,
    CheckoutHeaders,
    CheckoutHeader,
} from "./checkout-table.styles";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import CheckoutTotal from "../checkout-total/checkout-total.component";

const CheckoutTable = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <CheckoutTableContainer>
            <CheckoutHeaders>
                <CheckoutHeader>
                    <span>Product</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Description</span>
                </CheckoutHeader>

                <CheckoutHeader>
                    <span>Quantity</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Price/u</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Remove</span>
                </CheckoutHeader>
            </CheckoutHeaders>

            {Object.values(cartItems).map((item) => (
                <CheckoutItem key={item.id} item={item} />
            ))}

            <CheckoutTotal />
        </CheckoutTableContainer>
    );
};

export default CheckoutTable;
