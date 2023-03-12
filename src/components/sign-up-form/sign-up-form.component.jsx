import { SignUpContainer, Title } from "./sign-up-form.styles";

import { useState } from "react";

import {
    createUserDocumentFromAuth,
    createUserWithEmailAndPasswordAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPasswordAuth(
                email,
                password
            );
            await createUserDocumentFromAuth(user, { displayName });
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("sign-up failed: email already in use");
            }
            console.log("error while signing up", error);
        } finally {
            resetFormFields();
        }
    };

    return (
        <SignUpContainer>
            <Title>Don't have an account yet?</Title>
            <span>Sign up with your email and password</span>
            <form onSubmit={submitHandler} action="">
                <FormInput
                    label={"Display name"}
                    required
                    type="text"
                    onChange={changeHandler}
                    name="displayName"
                    value={displayName}
                ></FormInput>

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

                <FormInput
                    label={"Confirm password"}
                    required
                    type="password"
                    onChange={changeHandler}
                    name="confirmPassword"
                    value={confirmPassword}
                ></FormInput>

                <Button type="submit">Sign up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;
