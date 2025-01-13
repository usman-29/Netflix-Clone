// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAaIn33QD0t3fzcKIZsw8wt0WuUBd20MbU",
    authDomain: "netflix-clone-b7998.firebaseapp.com",
    projectId: "netflix-clone-b7998",
    storageBucket: "netflix-clone-b7998.firebasestorage.app",
    messagingSenderId: "63414852233",
    appId: "1:63414852233:web:1e3ea90cc26cd0ba10c458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

export { auth, db, signup, login, logout };