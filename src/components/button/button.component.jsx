import {
    BaseButtonContainer,
    GoogleButton,
    InvertedButton,
    DisabledButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    inverted: "inverted",
    google: "google-sign-in",
    disabled: "disabled",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButtonContainer,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton,
        [BUTTON_TYPE_CLASSES.disabled]: DisabledButton,
    }[buttonType]);

const Button = ({ children, buttonType, isDisabled, ...otherProps }) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton disabled={isDisabled} {...otherProps}>
            {children}
        </CustomButton>
    );
};

export default Button;
