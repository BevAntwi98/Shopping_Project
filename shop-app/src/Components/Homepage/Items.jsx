import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CardItem from './CardItem'
import { CardGroup } from 'react-bootstrap';
import { BrowserRouter as Router} from 'react-router-dom'
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
                    content.push(<CardRow cards={items.slice(lastRowIndex, rowCount*rowCounter)}/>);
                    lastRowIndex = rowCounter * rowCount;
                    rowCounter+=1;
                }
            }
         return (<div>{content.map(c => (c))}</div>);
      }
};

const CardRow = ({cards}) => {
  return <div><Router><CardGroup>{cards.map(card => (<CardItem items={card} key={card.id}/>))}</CardGroup></Router></div>;
};


export default Items;
