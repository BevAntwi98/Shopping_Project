import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import "../../Design/Product.css"
import PageItem from 'react-bootstrap/PageItem'

function Product(props) {
    const NUM_ITEMS_SHOW = 4;
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
                setCategory(res);
                setItems(res.items);
                setItemsToShow(res.items.slice(firstIndex, lastIndex));
            })
            .catch(error => console.log(error));
        setCart([localStorage.getItem('cart-items')]);
        console.log(localStorage.getItem('cart-items'));
    }, [props.id, active]);

    function handlePageUpdate(n) {
        setActive(n);
        setFirstIndex((NUM_ITEMS_SHOW * n) - NUM_ITEMS_SHOW);
        setLastIndex(NUM_ITEMS_SHOW * n)
    }

    let buttons = [];
    for (let n = 1; n <= Math.round(items.length / NUM_ITEMS_SHOW); n++) {
        buttons.push(
            <Pagination.Item key={n} active={n === active} onClick={() => handlePageUpdate(n)}>
                {n}
            </Pagination.Item>,
        )
    }

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
        <>
            <div>
                {<h1 className="text-center">{category.name}</h1>}
                {
                    items.map(item => {
                        return (

                            <CardDeck style={{ display: 'inline-block', width: '20.6em', justifyContent: 'center', margin: '0.6rem', marginTop: '6%', marginLeft: '40px' }}>

                                <Card style={{ height: '390px' }}  >
                                    <Card.Img variant="top" height={200} src={item.image} />
                                    <Card.Body>
                                        <Card.Title style={{fontSize: '1em'}}>{item.title}</Card.Title><br />

                                        <Card.Text className="fw-bold" style={{ textAlign: 'center' }}>£{item.price}</Card.Text>

                                    </Card.Body>
                                    {/* FUNCTIONALITY */}

                                    <Button variant="primary" onClick={() => handleAddToCart(item.id)}>Add to Cart</Button>


                                </Card>
                            </CardDeck>
                        )
                    })
                }
                {/* {paginationButtons}
                <button onClick={clearLocalStorage}>Clear Local Storage</button> */}
            </div>
        </>
    );
}

export default Product;


// <Card >
// <Card.Img variant="top" height={200} src={item.image} />
// <Card.Body>
//     <Card.Title>{item.title}</Card.Title>
//     <Card.Text className="fw-bold">£{item.price}</Card.Text>
// </Card.Body>
// {/* FUNCTIONALITY */}
// <Button variant="primary" onClick={() => handleAddToCart(item.id)}>Add to Cart</Button>
// </Card>