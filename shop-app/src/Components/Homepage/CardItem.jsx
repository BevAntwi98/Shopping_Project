import React, { useState } from 'react';
import '../../Design/Cards.css'

const CardItem = ({items,addBasketHandler}) => {
  return(
        <figure className="eachCard" data-testid='card-1'>
          <a className='cardImage' href={`/product/${items.id}`}><img className='cardImage' src={items.image} alt={items.description} /></a>
        <figcaption>
          <a className="cardTitle" href={`/product/${items.id}`}><p>{items.title}</p></a>
          <a className="cardPrice" href={`/product/${items.id}`}>£{items.price}</a>
        </figcaption>
          <button className='cartBtn' onClick={() => addBasketHandler(items.id)}>Add to Cart</button>
          </figure>
        
  );
};


export default CardItem;
