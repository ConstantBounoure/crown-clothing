import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => [],
    cartDropdownDisplayed: false,
    setCartDropdownDIsplayed: () => false,
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartDropdownDisplayed, setCartDropdownDIsplayed] = useState(false);
    const value = {
        cartItems,
        setCartItems,
        cartDropdownDisplayed,
        setCartDropdownDIsplayed,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
