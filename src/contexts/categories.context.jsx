import { createContext, useState, useEffect } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../mock/shop-data.js";

import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categories: {},
    setCategories: () => {},
});

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState({});
    const value = { categories, setCategories };

    // pour ajouter une fois à firestore la donnée mockée
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCollectionAndDocuments("categories");
            setCategories(categoriesMap);
        };

        getCategoriesMap();
    }, []);

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
