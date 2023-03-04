import { initializeApp } from "firebase/app";
import {
    getAuth,
    getRedirectResult,
    createUserWithEmailAndPassword,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore";

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

export const addCollectionAndDocuments = async (collectionKey, documents) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    for (const document of documents) {
        const docRef = doc(collectionRef, document.title.toLowerCase());
        batch.set(docRef, document);
    }

    await batch.commit();
};

export const getCollectionAndDocuments = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey);
    const queryInstance = query(collectionRef);
    const querySnapshot = await getDocs(queryInstance);

    const categoriesMap = querySnapshot.docs.reduce((acc, doc) => {
        const { title, items } = doc.data();
        acc[title.toLowerCase()] = items;

        return acc;
    }, {});

    return categoriesMap;
};

export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const getRedirectResultResponse = async () => {
    const response = await getRedirectResult(auth);

    if (!response) return;

    const { user } = response;
    return createUserDocumentFromAuth(user);
};

export const createUserWithEmailAndPasswordAuth = async (email, password) => {
    if (!(email && password)) return;

    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!(email && password)) return;

    return signInWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation
) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user", error);
        }
    }

    return userDocRef;
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    if (!callback) return;

    return onAuthStateChanged(auth, callback);
};
