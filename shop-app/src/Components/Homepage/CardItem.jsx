import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom'



const CardItem = ({items, key}) => {

    const navigate = useNavigate();
  return(
        <Card style={{ width: '18rem' }} key={key}>
        <Card.Img variant="top" src={items.image} />
        <Card.Body>
            <Card.Title>{items.title}</Card.Title>
            <Card.Text>£{items.price}</Card.Text>
            <Button variant="primary" onClick={() => {navigate('/products/'+items.id)}}>More Information</Button>
            <Button variant="secondary" onClick={() => {console.log("add to basket: ",items.id)}}>Add to Basket</Button>
        </Card.Body>
        </Card>
        
  );
};


export default CardItem;
