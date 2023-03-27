import { createContext, useReducer } from "react";

const getNewCartObject = (cartItems) => {
    return Object.assign({}, cartItems);
};

export const CART_REDUCER_ACTION_TYPES = {
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
    SET_CART_ITEMS: "SET_CART_ITEMS",
};

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_REDUCER_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload.isCartOpen,
            };
        case CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
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
    const [state, dispatch] = useReducer(
        cartReducer,
        INITIAL_CART_REDUCER_STATE
    );
    const { cartItems, isCartOpen, cartItemsCount, cartItemsTotalPrice } =
        state;

    const setIsCartOpen = (isCartOpen) => {
        dispatch({
            type: CART_REDUCER_ACTION_TYPES.SET_IS_CART_OPEN,
            payload: { isCartOpen },
        });
    };

    const updateCartItemsReducer = (newCartItems) => {
        const newTotalPrice = Object.values(newCartItems).reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );

        const newNumberOfItemsInCart = Object.values(newCartItems).reduce(
            (acc, item) => acc + item.quantity,
            0
        );

        dispatch({
            type: CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS,
            payload: {
                cartItems: newCartItems,
                cartItemsCount: newNumberOfItemsInCart,
                cartItemsTotalPrice: newTotalPrice,
            },
        });
    };

    const addItemToCart = (item) => {
        const { id } = item;
        const { cartItems } = state;

        if (id in cartItems) {
            cartItems[id].quantity += 1;
        } else {
            cartItems[id] = { ...item, quantity: 1 };
        }

        updateCartItemsReducer(getNewCartObject(cartItems));
    };

    const removeItemFromCart = (item) => {
        const { id } = item;
        const { cartItems } = state;

        delete cartItems[id];
        updateCartItemsReducer(getNewCartObject(cartItems));
    };

    const popItemFromCart = (item) => {
        const { id } = item;
        const { cartItems } = state;

        if (id in cartItems) {
            if (cartItems[id].quantity === 1) {
                removeItemFromCart(item);
            } else {
                cartItems[id].quantity -= 1;
            }
        }

        updateCartItemsReducer(getNewCartObject(cartItems));
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
