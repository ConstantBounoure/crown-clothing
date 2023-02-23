import "./product-card.styles.scss";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const clickHandler = () => {};

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />

            <Button buttonType={"inverted"} onClick={clickHandler}>
                ADD TO CART
            </Button>

            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    );
};

export default ProductCard;
