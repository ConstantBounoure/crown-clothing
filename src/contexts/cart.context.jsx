import { createContext, useState, useEffect } from "react";

const getNewCartObject = (cartItems) => {
    return Object.assign({}, cartItems);
};

export const CartContext = createContext({
    cartItems: {},
    isCartOpen: false,
    cartItemsCount: 0,
    cartItemsTotalPrice: 0,
    setIsCartOpen: () => false,
    setCartItemsCount: () => 0,
    addItemToCart: () => {},
    popItemFromCart: () => {},
    removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartItemsTotalPrice, setCartItemsTotalPrice] = useState(0);

    useEffect(() => {
        const numberOfItemsInCart = Object.values(cartItems).reduce(
            (acc, item) => acc + item.quantity,
            0
        );

        setCartItemsCount(numberOfItemsInCart);
    }, [cartItems]);

    useEffect(() => {
        const totalPrice = Object.values(cartItems).reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );

        setCartItemsTotalPrice(totalPrice);
    }, [cartItems]);

    const addItemToCart = (item) => {
        const { id } = item;

        if (id in cartItems) {
            cartItems[id].quantity += 1;
        } else {
            cartItems[id] = { ...item, quantity: 1 };
        }

        setCartItems(getNewCartObject(cartItems));
    };

    const removeItemFromCart = (item) => {
        const { id } = item;

        delete cartItems[id];
        setCartItems(getNewCartObject(cartItems));
    };

    const popItemFromCart = (item) => {
        const { id } = item;

        if (id in cartItems) {
            if (cartItems[id].quantity === 1) {
                removeItemFromCart(item);
            } else {
                cartItems[id].quantity -= 1;
            }
        }

        setCartItems(getNewCartObject(cartItems));
    };

    const value = {
        cartItems,
        isCartOpen,
        cartItemsCount,
        cartItemsTotalPrice,
        addItemToCart,
        popItemFromCart,
        removeItemFromCart,
        setIsCartOpen,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
