import {
    CheckoutItemContainer,
    ImgContainer,
    Image,
    Field,
    Quantity,
    Value,
    Arrow,
    RemoveContainer,
} from "./checkout-item.styles";

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
        <CheckoutItemContainer>
            <ImgContainer>
                <Image src={imageUrl} alt={name} />
            </ImgContainer>

            <Field>{name}</Field>

            <Quantity>
                <Arrow onClick={deleteItemHandler}>&#10094;</Arrow>
                <Value className="value">{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>

            <Field>{price}</Field>
            <RemoveContainer onClick={removeItemHandker}>
                &#10005;
            </RemoveContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
