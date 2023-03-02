import "./checkout-table.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import CheckoutTotal from "../checkout-total/checkout-total.component";

const CheckoutTable = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="checkout-table-container">
            <div className="checkout-headers">
                <div className="checkout-header">
                    <span>Product</span>
                </div>
                <div className="checkout-header">
                    <span>Description</span>
                </div>

                <div className="checkout-header">
                    <span>Quantity</span>
                </div>
                <div className="checkout-header">
                    <span>Price/u</span>
                </div>
                <div className="checkout-header">
                    <span>Remove</span>
                </div>
            </div>

            {Object.values(cartItems).map((item) => (
                <CheckoutItem key={item.id} item={item} />
            ))}

            <CheckoutTotal />
        </div>
    );
};

export default CheckoutTable;
