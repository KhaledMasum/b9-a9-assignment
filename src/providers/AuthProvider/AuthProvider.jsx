import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const UpdateUserProfile = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setUser(null);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, GithubProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    function DocumentTitle(title) {
        useEffect(() => {
            document.title = title;
        }, [title]);
    }

    const authInfo = {
        createUserWithEmail,
        UpdateUserProfile,
        signInWithEmail,
        logOut,
        googleLogin,
        githubLogin,
        user,
        loading,
        DocumentTitle
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