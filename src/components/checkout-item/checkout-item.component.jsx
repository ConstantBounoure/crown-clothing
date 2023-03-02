import "./checkout-item.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ item }) => {
    const { addItemToCart, popItemFromCart, removeItemFromCart } =
        useContext(CartContext);
    const { name, imageUrl, price, quantity } = item;

    const addItemHandler = () => addItemToCart(item);
    const deleteItemHandler = () => popItemFromCart(item);
    const removeItemHandker = () => removeItemFromCart(item);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>

            <span className="quantity">
                <div className="arrow" onClick={deleteItemHandler}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>

            <span className="price">{price}</span>
            <div className="remove-container" onClick={removeItemHandker}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
