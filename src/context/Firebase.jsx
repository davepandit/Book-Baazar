import { createContext, useContext , useState , useEffect} from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc , getDocs} from "firebase/firestore"; 
import { getStorage, ref , uploadBytes , getDownloadURL } from "firebase/storage";


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

//provider 
const provider = new GoogleAuthProvider()

//instance of the firestore
const db = getFirestore(app)

//storage
const storage = getStorage(app)




//context provider
const FirebaseContextProvider = (props)=>{
    const [user , setUser] = useState(null)

    //to check whether the user is signed in or not
    useEffect(()=>{
        onAuthStateChanged(auth , (user)=>{
           if(user){
            setUser(user)

           }
           else{
            setUser(null)
           }
        })
    } , [])

    //sign up code 
    const signUpUserWithEmailAndPassword = (email , password) =>{
        createUserWithEmailAndPassword(auth , email , password)
    }

    //sign in or log in code
    const signInUserWithEmailAndPassword = (email , password) =>{
        signInWithEmailAndPassword(auth , email , password)

    }

    //sign in with google
    const signInUserWithGoogle = () =>{
        signInWithPopup(auth , provider)
    }

    //check is the user is Logged in or not
    const isLoggedIn = user ? true : false

    console.log(user)

    //entry in database including image
    const handleCreateNewListing = async (name , isbnNumber , coverPic , price)=>{
        //creating a ref
        const imageRef = ref (storage ,`uploads/images/${Date.now()}-${coverPic.name}`)
        const uploadResult = await uploadBytes(imageRef , coverPic)
        await addDoc(collection(db , "books") , {
            name:name,
            isbnNumber:isbnNumber,
            price:price,
            imageURL: uploadResult.ref.fullPath,
            userId:user.uid,
            userEmail:user.email,
            displayName:user.displayName,
            photoUrl:user.photoURL


        })
    }

    //read data from the database
    const getData = async()=>{
        const booksData =  await getDocs(collection(db , "books"))
        return booksData;
    }

    //get image URL
    const getImageURL = (path)=>{
        return getDownloadURL(ref(storage , path))
    }

    return(
        <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword , signInUserWithEmailAndPassword , signInUserWithGoogle , isLoggedIn , handleCreateNewListing, getData , getImageURL }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}


export {useFirebase}
export {app}
export default FirebaseContextProvider