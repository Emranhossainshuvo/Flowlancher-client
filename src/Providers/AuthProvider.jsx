import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const handleSignOut = () => {
        return signOut(auth)
    }
    
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // useEffect for onauthstatechanged

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('current user: ', currentUser )
        })
        return () => {
            return unSubscribe(); 
        }
    }, [])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const  googleLogin = () => {
        return signInWithPopup( auth, googleProvider);
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }


    const authInfo = {
       createUser, 
       logIn, 
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