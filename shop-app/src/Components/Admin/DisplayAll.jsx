import "../../Design/DisplayAll.css";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import axios from 'axios';

function DisplayAll(){
    const [items, setItems] = useState([]);
    const [viewItems, setViewItems] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [inputs, setInputs] = useState({itemTitle: "", itemImage: "", itemPrice: 0, itemDescription: "",});
    
    useEffect(()=>{
        fetch('http://localhost:8080/items')
            .then(res => res.json())
            .then(res => {
                setItems(res);
            })
            .catch(err => console.log(err))
    }, []);

    function handleInputChange(event) {
        let newInputs = inputs;
        newInputs[event.target.name] = event.target.value;
        setInputs(newInputs);
    }

    function handleOnSubmit() {
        console.log(inputs);
        setToggle(true);
    }

    function handleDeleteItem(id) { //deletes item
        axios
        .delete(`http://localhost:8080/items/${id}`)
        .then(() => {
            alert('item deleted');
            window.location = "/view-all";
        })
        .catch(err => console.log(err))
    }

    function handleUpdateItem(id){ //updates item
    axios.put(`http://localhost:8080/items/${id}`)

    }
    
    function handleUpdateCategory(id){ //updates category
    axios.put(`http://localhost:8080/items/${id}`)

    }
    
    function addItem(){ //add button goes to form page
        window.location=("/add-item")
    }

   
    return(
        <div className="category-container">
            <Button className='addItemBtn' variant="success" onClick={()=>addItem()} >Add New Item</Button>
            {
                items.map(item => {
                    return toggle ? (
                        <CardDeck className='cardDeck' style={{ display: 'inline-block', width: '20.6em', justifyContent: 'center', margin: '0.6rem', marginTop: '6%', marginLeft: '40px' }}>

                            <Card style={{ height: '410px' }}>
                                <Card.Img height={'200px'} style={{ width: '200px', alignSelf: 'center', padding:'10px' }} src={item.image} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '15px', textAlign: 'center' }}>{item.title}</Card.Title><br />
                                    {/* <Card.Text className='cardDesc'>{item.description}</Card.Text><br /> */}
                                    <Card.Text className='cardPrice'>£{item.price}</Card.Text>
                                </Card.Body>
                                {/* FUNCTIONALITY */}
                                <Button variant="warning" onClick={() => setToggle(false)}>Edit</Button>
                                <Button onClick={() => handleDeleteItem(item.id)} variant="danger">Delete</Button>
                            </Card>
                        </CardDeck>
                    ) : (
                        <CardDeck className='cardDeck' style={{ display: 'inline-block', width: '20.6em', justifyContent: 'center', margin: '0.6rem', marginTop: '6%', marginLeft: '40px' }}>

                            <Card style={{ height: '410px' }}>
                                <Card.Img height={'200px'} style={{ width: '200px', alignSelf: 'center', padding:'10px' }} src={item.image} />
                                <input name="itemImage" onChange={handleInputChange} className='input-cardImage' type="text" placeholder={item.image} />
                                <Card.Body>
                                    <input name="itemTitle" onChange={handleInputChange} style={{ fontSize: '15px', textAlign: 'center' }} placeholder={item.title} /><br />
                                    {/* <input name="itemDescription" onChange={handleInputChange} className='input-cardDesc'>{item.description}</input><br /> */}
                                    <input name="itemPrice" onChange={handleInputChange} className='input-cardPrice' value={`£${item.price}`} />
                                </Card.Body>
                                {/* FUNCTIONALITY */}
                                <Button variant="success" onClick={handleOnSubmit}>Submit</Button>
                                <Button onClick={() => handleDeleteItem(item.id)} variant="danger">Delete</Button>
                            </Card>
                        </CardDeck>
                    )
                })
            }
        </div>
    )
}
export default DisplayAll