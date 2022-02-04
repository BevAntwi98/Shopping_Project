import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CardItem from './CardItem'

import Cart from '../CartLogic/Cart';
import ItemProduct from '../CartLogic/ItemProduct';

import {Col, Row } from 'react-bootstrap';

import '../../Design/Cards.css'

const Items = ({rowCount}) => {
    
    let [cart,setCart] =  useState(new Cart(0));
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [items, setItemsValues] = useState([]);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()



    useEffect( () => {
        fetch("http://localhost:8080/items").then(res => res.json()).then(
            (response) => {
            setItemsValues(response)
        }, (error) => {
            setLoading(true);
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
        if (!(localStorage.getItem('cart'))) return; 
        setCart(Cart.convertToCartObject(JSON.parse(localStorage.getItem('cart'))._content));
    }, []);
    
    function handleAddToCart(id,quantity=1) {
        console.log("added item id"+ id + " to basket");
        let tempCart = cart;
        tempCart.addToCart(new ItemProduct(id, quantity));


        localStorage.setItem('cart', JSON.stringify(tempCart));
        
    }

    let content = [];
    let lastRowIndex = 0;
    let rowCounter = 1;
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (loading) {
        return <div>Loading...</div>;
      } else {

            for (let i in items)
            {
                if (i%rowCount===0 && i!==0){
                    content.push(<Row ><CardRow cards={items.slice(lastRowIndex, rowCount*rowCounter)} addBasketHandler={handleAddToCart} /></Row>);
                    lastRowIndex = rowCounter * rowCount;
                    rowCounter+=1; 
                }
            }
         return (<div className="products">{content.map(c => (c))}</div>);
      }
};

const CardRow = ({cards,addBasketHandler}) => {
  return (cards.map(card => (<Col><CardItem items={card} key={card.id} addBasketHandler={addBasketHandler}/></Col>)));
};


export default Items;