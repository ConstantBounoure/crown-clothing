import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    useEffect(() => {
        async function getRedirectResultResponse() {
            const response = await getRedirectResult(auth);

            if (response) {
                const { user } = response;
                const userDocRef = await createUserDocumentFromAuth(user);
            }
        }

        getRedirectResultResponse();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google redirect
            </button>
        </div>
    );
};

export default SignIn;
