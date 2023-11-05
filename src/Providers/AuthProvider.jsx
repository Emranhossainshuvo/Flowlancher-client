import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


    
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const  googleLogin = () => {
        return signInWithPopup( auth, googleProvider);
    }


    const authInfo = {
       createUser, 
       logIn, 
       googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;