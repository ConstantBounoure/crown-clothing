import { CategoriesContainer } from "./categories-list.styles";
import DirectoryItem from "../directory-item/directory-item.component";

import CATEGORIES from "../../mock/categories.json";

const CategoriesList = () => {
    return (
        <CategoriesContainer>
            {CATEGORIES.map((directory) => {
                return (
                    <DirectoryItem key={directory.id} directory={directory} />
                );
            })}
        </CategoriesContainer>
    );
};

export default CategoriesList;
