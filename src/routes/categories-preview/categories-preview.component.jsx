import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const { categories } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categories).map((title) => (
                <CategoryPreview
                    key={title}
                    title={title}
                    products={categories[title]}
                />
            ))}
        </Fragment>
    );
};

export default CategoriesPreview;
