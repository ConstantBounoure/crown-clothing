import { useNavigate } from "react-router-dom";
import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ directory }) => {
    const { imageUrl, title, route } = directory;
    const navigate = useNavigate();
    const goToRoute = () => navigate(route);

    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>

            <Body onClick={goToRoute}>
                <h2>{title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
