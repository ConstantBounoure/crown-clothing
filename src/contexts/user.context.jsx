import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// const userReducer = (state, action) => {
//     const { type, payload } = action;

//     switch (type) {
//         case "SET_CURRENT_USER":
//             return { ...state, currentUser: payload };

//         default:
//             throw new Error(`Unhandled type ${type} in userReducer`);
//     }

//     return {};
// };

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            setCurrentUser(user);

            if (user) {
                createUserDocumentFromAuth(user);
            }
        });

        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
