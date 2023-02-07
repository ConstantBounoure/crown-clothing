import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBF7TgOkgd3g5bNh9bNeBlA2HjTGOHF8qU",
    authDomain: "crown-clothing-db-1434f.firebaseapp.com",
    projectId: "crown-clothing-db-1434f",
    storageBucket: "crown-clothing-db-1434f.appspot.com",
    messagingSenderId: "769548571332",
    appId: "1:769548571332:web:fcbe5079b452827aa2ef91",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.log("error creating the user", error);
        }
    }

    return userDocRef;
};
