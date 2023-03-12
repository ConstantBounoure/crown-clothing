import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ directory }) => {
    const { imageUrl, title } = directory;

    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <Body>
                <h2>{title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;