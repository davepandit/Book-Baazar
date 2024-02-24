import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useState } from 'react';

const Login = () => {
    const firebase = useFirebase()
    console.log(firebase)
    const [email , setEmail] = useState("")
    const [password , setpassword] = useState("")

    //to handle submit 
    const handleSubmit = async(e) =>{
    e.preventDefault()
    console.log("signing in an user")
    const result = await firebase.signInUserWithEmailAndPassword(email , password)
    console.log("sign in successful" , result)
    
    }



  return (
    <div>
        <div className='container mt-5'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              value={email}
              onChange={(e)=>(setEmail(e.target.value))}
              
              type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              value={password}
              onChange={(e)=>(setpassword(e.target.value))}
              
              type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              LogIn
            </Button>
        </Form>
      </div>
    </div>
  )
}


export default Login