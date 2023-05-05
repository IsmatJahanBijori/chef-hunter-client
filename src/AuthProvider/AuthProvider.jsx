// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// eslint-disable-next-line react/prop-types
const auth = getAuth(app)
// eslint-disable-next-line no-unused-vars
const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line no-unused-vars
const githubProvider = new GithubAuthProvider()
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // na hole kete dibo
    // const [displayName, setDisplayName] = useState(null)
    // na hole kete dibo
    // email, password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // // google
    const googleUser = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // github
    const githubUser = () => {
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user, createUser, loading, signIn, logOut, googleUser, githubUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;