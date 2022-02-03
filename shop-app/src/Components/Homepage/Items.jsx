import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CardItem from './CardItem'

import {Col, Row } from 'react-bootstrap';

import '../../Design/Cards.css'

const Items = ({rowCount}) => {
    
    
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
            console.log(items);
            setLoading(false);
        });
    }, []);
    

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
                    content.push(<Row ><CardRow cards={items.slice(lastRowIndex, rowCount*rowCounter)}/></Row>);
                    lastRowIndex = rowCounter * rowCount;
                    rowCounter+=1; 
                }
            }
         return (<div className="products">{content.map(c => (c))}</div>);
      }
};

const CardRow = ({cards}) => {
  return (cards.map(card => (<Col><CardItem items={card} key={card.id}/></Col>)));
};


export default Items;