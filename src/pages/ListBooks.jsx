import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useFirebase } from '../context/Firebase';

const ListBooks = () => {
    //establishing a link between the component and the state in the context 
    const firebase = useFirebase()


    //maintaining the states
    const [name , setName] = useState('')
    const [isbnNumber , setIsbnNumber] = useState('')
    const [coverPic , setCoverPic] = useState('')
    const [price , setPrice] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        await firebase.handleCreateNewListing(name , isbnNumber , coverPic , price )


    }


  return (
    <div>
         <div className='container mt-5'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Book Name</Form.Label>
              <Form.Control 
              value={name}
              onChange={(e)=>(setName(e.target.value))}
              
              type="text" placeholder="enter book name" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ISBN Number</Form.Label>
              <Form.Control 
              value={isbnNumber}
              onChange={(e)=>(setIsbnNumber(e.target.value))}
              
              type="number" placeholder="ISBN Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control 
              value={price}
              onChange={(e)=>(setPrice(e.target.value))}
              
              type="number" placeholder="Enter price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cover Image</Form.Label>
              <Form.Control 
              onChange={(e)=>(setCoverPic(e.target.files[0]))}
              
              type="file" placeholder="Cover Pic" />
            </Form.Group>



            <Button variant="primary" type="submit">
              Add Books
            </Button>
        </Form>
        
      </div>
        
    </div>
  )
}

export default ListBooks