import { createContext, useState, useEffect, useReducer } from "react";

const getNewCartObject = (cartItems) => {
    return Object.assign({}, cartItems);
};

export const CART_REDUCER_ACTION_TYPES = {
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
    SET_CART_ITEMS_COUNT: "SET_CART_ITEMS_COUNT",
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    POP_ITEM_FROM_CART: "POP_ITEM_FROM_CART",
    REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
};

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_REDUCER_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload.isCartOpen,
            };
        case CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS_COUNT:
            return {
                ...state,
                cartItemsCount: payload.cartItemsCount,
            };
        case CART_REDUCER_ACTION_TYPES.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItemsCount: payload.cartItemsCount,
            };
        case CART_REDUCER_ACTION_TYPES.POP_ITEM_FROM_CART:
            return {
                ...state,
                cartItemsCount: payload.cartItemsCount,
            };
        case CART_REDUCER_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItemsCount: payload.cartItemsCount,
            };

        default:
            throw new Error(`Unhandled type ${type} in cart reducer`);
    }
};

export const INITIAL_CART_REDUCER_STATE = {
    cartItems: {},
    isCartOpen: false,
    cartItemsCount: 0,
    cartItemsTotalPrice: 0,
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
