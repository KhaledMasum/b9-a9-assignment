import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const UpdateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setUser(null);
        return signOut(auth);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider);
    }

    const githubLogin = () => {
        return signInWithPopup(auth, GithubProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        createUserWithEmail,
        UpdateUserProfile,
        signInWithEmail,
        logOut,
        googleLogin,
        githubLogin,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;