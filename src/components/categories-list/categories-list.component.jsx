import { CategoriesContainer } from "./categories-list.styles";
import DirectoryItem from "../directory-item/directory-item.component";

const CategoriesList = ({ categories }) => {
    return (
        <CategoriesContainer>
            {categories.map((directory) => {
                return (
                    <DirectoryItem key={directory.id} directory={directory} />
                );
            })}
        </CategoriesContainer>
    );
};

export default CategoriesList;
