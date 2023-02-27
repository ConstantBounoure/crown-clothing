import { createContext, useState } from "react";

const getNewCartObject = (cartItems) => {
    return Object.assign({}, cartItems);
};

export const CartContext = createContext({
    cartItems: {},
    addItemToCart: () => {},
    deleteItemFromCart: () => {},
    isCartOpen: false,
    setIsCartOpen: () => false,
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addItemToCart = (item) => {
        const { id } = item;

        if (id in cartItems) {
            cartItems[id].quantity += 1;
        } else {
            cartItems[id] = { ...item, quantity: 1 };
        }

        setCartItems(getNewCartObject(cartItems));
    };

    const deleteItemFromCart = (item) => {
        const { id } = item;

        if (id in cartItems) {
            cartItems[id].quantity -= 1;

            if (cartItems[id].quantity === 0) {
                delete cartItems[id];
            }
        }

        setCartItems(getNewCartObject(cartItems));
    };

    const value = {
        cartItems,
        isCartOpen,
        addItemToCart,
        deleteItemFromCart,
        setIsCartOpen,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
