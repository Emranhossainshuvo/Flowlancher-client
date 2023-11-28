import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { prototype } from "postcss/lib/previous-map";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    const handleSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // useEffect for onauthstatechanged

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log('current user: ', currentUser )
        })
        return () => {
            return unSubscribe(); 
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const  googleLogin = () => {
        setLoading(true)
        return signInWithPopup( auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const authInfo = {
       createUser, 
       logIn, 
       loading,
       googleLogin, 
       githubLogin, 
       user,
       handleSignOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
