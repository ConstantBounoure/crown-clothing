import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
    inverted: "inverted",
    google: "google-sign-in",
};

const Button = ({ children, buttonType, isDisabled, ...otherProps }) => {
    return (
        <button
            className={`${BUTTON_TYPE_CLASSES[buttonType] ?? "default"} ${
                isDisabled ? "disabled" : ""
            } button-container`}
            disabled={isDisabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
