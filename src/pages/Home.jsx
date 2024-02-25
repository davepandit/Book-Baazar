import React from 'react'
import { useState , useEffect } from 'react'
import { useFirebase } from '../context/Firebase'
import Cards from '../components/Cards'
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
    const [books , setBooks] = useState([])


    //linking the component with the context
    const firebase = useFirebase()

    useEffect(()=>{
        firebase.getData().then((books)=>(setBooks(books.docs)))
    },[])


  return (
    <div>
        <div className='container mt-5'>
            <CardGroup >
                {
                    books.map((book)=>{
                        return (<Cards key={book.id} {...book.data()}/>)
                    })
                }
            </CardGroup>
        </div>



    </div>
  )
}

export default Home