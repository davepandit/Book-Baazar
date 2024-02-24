import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";


//context
const FirebaseContext = createContext(null)

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDUwBbmr3g8AHCl1qMdPQrXe7x7yVoJPho",
    authDomain: "book-baazar.firebaseapp.com",
    projectId: "book-baazar",
    storageBucket: "book-baazar.appspot.com",
    messagingSenderId: "936740529743",
    appId: "1:936740529743:web:8fdf76278afbbe425aec3a"
  };

//custom hook
const useFirebase = () =>{
    return useContext(FirebaseContext)
}
//initializing app
const app = initializeApp(firebaseConfig)



//initializing the auth
const auth = getAuth(app)

//sign up code 
const signUpUserWithEmailAndPassword = (email , password) =>{
    createUserWithEmailAndPassword(auth , email , password)
}

//sign in or log in code
const signInUserWithEmailAndPassword = (email , password) =>{
    signInWithEmailAndPassword(auth , email , password)

}



//context provider
const FirebaseContextProvider = (props)=>{
    return(
        <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword , signInUserWithEmailAndPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}


export {useFirebase}
export {app}
export default FirebaseContextProvider