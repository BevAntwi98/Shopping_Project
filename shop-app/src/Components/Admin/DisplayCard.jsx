import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from "react";

function DisplayCard(props) {
    const [categories, setCategories] = useState([])
    const [toggle, setToggle] = useState(true);
    const [inputs, setInputs] = useState({itemTitle: "", itemImage: "", itemPrice: null, itemDescription: "", itemCategory: null});

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then(res => res.json())
            .then(res => {
                setCategories(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        let newInputs = inputs;
        newInputs[name] = value;
        setInputs(newInputs);
    }

    function handleOnSubmit() {
        handleUpdateItem(
            props.id, 
            inputs.itemTitle, 
            inputs.itemImage, 
            parseFloat(inputs.itemPrice), 
            inputs.itemDescription, 
            inputs.itemCategory
        );
        setToggle(true);
    }

    function handleDeleteItem(id) { //deletes item
        axios
        .delete(`http://localhost:8080/items/${id}`)
        .then(() => {
            alert('item deleted');
            window.location = "/view-all";
        })
        .catch(err => {
            alert('could not be deleted');
            console.log(err);
        });
    }

    function checkIfURL(link) {
        try {
            let url;
            url = new URL(link);
        } catch (error) {
            console.log(error);
            return false;
        }

        return true;
    }

    function checkIfNumber(num) {
        return !isNaN(num);
    }

    function checkIfCategory(id) {
        return !(id < 1);
    }

    function handleUpdateItem(id, title, image, price, description, categoryId) { //updates item
        //client-side validations
        if (categoryId && !checkIfCategory(categoryId)) return alert("Category is not a valid category");
        if (price && !checkIfNumber(price)) return alert("Price is not a valid price");
        if (!checkIfNumber(id)) return alert("Id is not a valid id");
        if (image && !checkIfURL(image)) return alert("Image is not a valid URL");

        const updatedItem = {
            title,
            price,
            image,
            description,
            categoryId,
        }

        axios
        .patch(`http://localhost:8080/items/${id}`, updatedItem)
        .then(() => {
            alert('item updated');
            window.location = "/view-all";
        })
        .catch(err => {
            alert('item could not be updated', err);
            console.log(err);
        })
    }

    return toggle ? (
        <CardDeck className='cardDeck' style={{ display: 'inline-block', width: '20.6em', justifyContent: 'center', margin: '0.6rem', marginTop: '6%', marginLeft: '40px' }}>

            <Card className='cardItem' style={{ height: '410px' }}>
                <Card.Img height={'200px'} style={{ width: '200px', alignSelf: 'center', padding:'10px' }} alt={props.desc}  src={props.image} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '15px', textAlign: 'center' }}>{props.title}</Card.Title><br />
                    {/* <Card.Text className='cardDesc'>{props.desc}</Card.Text><br /> */}
                    <Card.Text className='cardPrice'>£{props.price}</Card.Text><br />
                    <Card.Text className='cardCategory'>{props.category}</Card.Text>
                </Card.Body>
                {/* FUNCTIONALITY */}
                <Button variant="warning" onClick={() => setToggle(false)}>Edit</Button>
                <Button onClick={() => handleDeleteItem(props.id)} variant="danger">Delete</Button>
            </Card>
        </CardDeck>
    ) : (
        <CardDeck className='cardDeck' style={{ display: 'inline-block', width: '20.6em', justifyContent: 'center', margin: '0.6rem', marginTop: '6%', marginLeft: '40px' }}>

            <Card style={{ height: '410px' }}>
                <Card.Img height={'200px'} style={{ width: '200px', alignSelf: 'center', padding:'10px' }} alt={props.desc} src={props.image} />
                <input name="itemImage" onChange={handleInputChange} className='input-cardImage' type="text" placeholder={props.image} />
                <Card.Body>
                    <input name="itemTitle" onChange={handleInputChange} style={{ fontSize: '15px', textAlign: 'center' }} placeholder={props.title} /><br />
                    <textarea name="itemDescription" onChange={handleInputChange} className='input-cardDesc' placeholder={props.desc} />{}<br />
                    <input name="itemPrice" onChange={handleInputChange} className='input-cardPrice' placeholder={props.price} /><br />
                    <select name="itemCategory" className='input-cardCategory' onChange={handleInputChange} placeholder={props.category}>
                        <option value={0} disabled selected hidden>Select a Category</option>
                        {
                            categories.map(category => {
                                return (
                                    <option value={category.id}>{category.name.toUpperCase()}</option>
                                )
                            })
                        }
                    </select>
                </Card.Body>
                {/* FUNCTIONALITY */}
                <Button variant="success" onClick={handleOnSubmit}>Submit</Button>
                <Button onClick={() => handleDeleteItem(props.id)} variant="danger">Delete</Button>
            </Card>
        </CardDeck>
    )
}

export default DisplayCard;