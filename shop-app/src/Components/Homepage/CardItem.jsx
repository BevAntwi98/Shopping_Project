import React from 'react';
import { useNavigate} from 'react-router-dom'

import '../../Design/HomepageCards.css'

const CardItem = ({items, key}) => {

    const navigate = useNavigate();
  return(
   
        
        <figure className="eachCard">
        <img className='cardImage' src={items.image}  alt={items.description} onClick={() => {navigate('/product/'+items.id)}}/>
        <figcaption>
          <div onClick={() => {navigate('/product/'+items.id)}}><h2 className="cardTitle" >{items.title}</h2></div>
          <div className="cardPrice" onClick={() => {navigate('/product/'+items.id)}}>£{items.price}</div>
        </figcaption>
          <button className='cartBtn' onClick={() => {console.log("add to basket: ",items.id)}}>Add to Cart</button>

          </figure>

      
   

    // <div  className="cardContainer">
    //   <Card className='card-body text-dark' key={key} border="light" style={{ width: '18rem' }}>
    //     <Card.Img className='card-image' variant="top" src={items.image}onClick={() => {navigate('/product/'+items.id)}}/>
    //     <Card.Body>
    //         <Card.Title className='card-title' onClick={() => {navigate('/product/'+items.id)}}>{items.title}</Card.Title>
    //         <Card.Text  onClick={() => {navigate('/product/'+items.id)}}>£{items.price}</Card.Text>
    //         <Button className='btn ' variant="primary" onClick={() => {console.log("add to basket: ",items.id)}}>Add to Basket</Button>
    //     </Card.Body>
    //     </Card>
    // </div>
        
        
  );
};


export default CardItem;
