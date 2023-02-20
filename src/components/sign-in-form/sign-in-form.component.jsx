import "./sign-in-form.styles.scss";

import { useEffect, useState } from "react";
import {
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    signInUserWithEmailAndPassword,
    getRedirectResultResponse,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    useEffect(() => {
        getRedirectResultResponse();
    }, []);

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInUserWithEmailAndPassword(
                email,
                password
            );

            if (!user)
                alert(
                    "user sign in failed, check that all fields are provided"
                );
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;

                case "auth/user-not-found":
                    alert("not user associated with this email");
                    break;

                default:
                    alert("error while signing in");
                    console.log(error);
                    break;
            }
        } finally {
            setFormFields(defaultFormFields);
        }
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const signInUserWithGooglePopup = async () => {
        await signInWithGooglePopup();
    };

    const signInUserWithGoogleRedirect = async () => {
        await signInWithGoogleRedirect();
    };

    return (
        <div className="sign-in-container">
            <h2>Already have an account ?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={submitHandler}>
                <FormInput
                    label={"Email"}
                    required
                    type="text"
                    onChange={changeHandler}
                    name="email"
                    value={email}
                ></FormInput>

                <FormInput
                    label={"Password"}
                    required
                    type="password"
                    onChange={changeHandler}
                    name="password"
                    value={password}
                ></FormInput>

                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>

                    <Button
                        type="button" // par défaut de type submit
                        onClick={signInUserWithGooglePopup}
                        buttonType={"google"}
                    >
                        Google Sign in
                    </Button>
                </div>
                <div className="redirect-container">
                    <Button
                        type="button" // par défaut de type submit
                        onClick={signInUserWithGoogleRedirect}
                        buttonType={"inverted"}
                    >
                        Google redirect
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
