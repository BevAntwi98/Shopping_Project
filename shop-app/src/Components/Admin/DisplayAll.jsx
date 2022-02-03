import "../../Design/DisplayAll.css";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import DisplayCard from "./DisplayCard";

function DisplayAll(){
    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:8080/items')
            .then(res => res.json())
            .then(res => {
                setItems(res);
            })
            .catch(err => console.log(err))
    }, []);
    
    function addItem(){ //add button goes to form page
        window.location=("/add-item")
    }

   
    return(
        <div className="category-container">
            <Button className='addItemBtn' variant="success" onClick={()=>addItem()} >Add New Item</Button>
            {
                items.map(item => {
                    return <DisplayCard id={item.id} title={item.title} image={item.image} price={item.price} desc={item.description} category={item.category} />
                })
            }
        </div>
    )
}
export default DisplayAll;