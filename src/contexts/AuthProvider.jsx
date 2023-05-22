// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 1. Create User With Email & Password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // 2. Update user
    const updateUser = (userInfo) => {
        console.log(userInfo);
        return updateProfile(auth.currentUser, userInfo);
    };

    // 3. Login with Password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // 4. Google Signin
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // 5. Logout
    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('resaleToken');
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe()
        };
    }, [])



    const authInfo = {
        user,
        createUser,
        updateUser,
        signIn,
        signInWithGoogle,
        logOut,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;