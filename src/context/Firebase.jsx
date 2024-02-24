import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

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


//initializing app
const app = initializeApp(firebaseConfig)

//creating a custom hook to connect the components to the context
const useFirebase = useContext(FirebaseContext)

//context provider
const FirebaseContextProvider = (props)=>{
    return(
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    )
}


export {useFirebase}
export {app}
export default FirebaseContextProvider