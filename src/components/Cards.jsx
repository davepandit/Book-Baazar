import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState , useEffect } from 'react';
import { useFirebase } from '../context/Firebase';


const Cards = (props) => {
  const [url , setUrl] = useState(null)
  const firebase = useFirebase()

  useEffect(()=>{
    firebase.getImageURL(props.imageURL).then((url)=>(setUrl(url)))
    

  },[])

  return (
    <div>
        <Card style={{ width: '18rem' , margin:'15px'}}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            This is a book called as the {props.name} and the book is sold by {props.displayName} and the book costs Rs.{props.price}
            </Card.Text>
            <Button variant="primary">Buy</Button>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Cards