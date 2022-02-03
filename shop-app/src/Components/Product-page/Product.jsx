
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import "../../Design/Product.css";
import PageItem from 'react-bootstrap/PageItem'

function Product(props) {
    const NUM_ITEMS_SHOW = 10;
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState({});
    const [items, setItems] = useState([]);
    const [itemsToShow, setItemsToShow] = useState([]);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(NUM_ITEMS_SHOW);
    const [active, setActive] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:8080/categories/${props.id}`)
            .then(res => res.json())
            .then(res => {
                let responseItems = res.items;
                // const length = responseItems.length
                // for (let j = 0; j < 10; j++) {
                //     for (let i = 0; i < length; i++) {
                //         responseItems.push(res.items[i]);
                //     }
                // }
                setCategory(res);
                setItems(responseItems);
                setItemsToShow(responseItems.slice(firstIndex, lastIndex));
            })
            .catch(error => console.log(error));
        setCart([localStorage.getItem('cart-items')]);
        console.log(localStorage.getItem('cart-items'));
    }, [props.id, active]);

    function handlePageUpdate(n) {
        setActive(n);
        setFirstIndex((NUM_ITEMS_SHOW * n) - NUM_ITEMS_SHOW);
        setLastIndex(NUM_ITEMS_SHOW * n);
    }

    let buttons = [];
    console.log(items.length / NUM_ITEMS_SHOW);
    console.log(Math.ceil(items.length / NUM_ITEMS_SHOW));

    for (let n = 1; n <= Math.ceil(items.length / NUM_ITEMS_SHOW); n++) {
        buttons.push(
            <Pagination.Item className="pg-btn" key={n} active={n === active} onClick={() => handlePageUpdate(n)}>
                {n}
            </Pagination.Item>,
        )
    }

    console.log(buttons);

    let updateCart = [];

    // Adding to cart functionality
    function handleAddToCart(id) {
        updateCart = cart;
        updateCart.push(id);

        setCart(updateCart);
        localStorage.setItem('cart-items', JSON.stringify(cart));
        console.log(localStorage.getItem('cart-items'));
    }

    function clearLocalStorage() {
        localStorage.clear();
        console.log(localStorage.getItem('cart-items'));
    }

    return (


        <div className="category-container">
            <h1 className="text-center">{category.name}</h1>
            {
                itemsToShow.map(item => {
                    return (
                        
                        <CardDeck  className='cardDeck' style={{ display: 'inline-block', width: '20.6em', justifyContent: 'center', margin: '0.6rem', marginTop: '6%', marginLeft: '40px' }}>

                            <Card style={{ height: '410px' }}>
                                <Card.Img height={'200px'} style={{ width: '200px', alignSelf: 'center', padding:'10px' }} src={item.image} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '15px', textAlign: 'center' }}>{item.title}</Card.Title><br />
                                    <Card.Text className='cardPrice'>£{item.price}</Card.Text>
                                </Card.Body>
                                {/* FUNCTIONALITY */}

                                <Button className='Btn' onClick={() => handleAddToCart(item.id)}>Add to Cart</Button>
                            </Card>
                        </CardDeck>
                    )
                })
            }
            <Pagination className="pg-btn-container">{buttons}</Pagination>
            {/* <button onClick={clearLocalStorage}>Clear Local Storage</button> */}
        </div>
    );

}
export default Product