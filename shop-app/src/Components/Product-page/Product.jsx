import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'

function Product(props) {
    const NUM_ITEMS_SHOW = 4;
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState({});
    const [items, setItems] = useState([]);
    const [itemsToShow, setItemsToShow] = useState([]);
    const [firstItem, setFirstItem] = useState(0);
    const [lastItem, setLastItem] = useState(NUM_ITEMS_SHOW);

    useEffect(() => {
        fetch(`http://localhost:8080/categories/${props.id}`)
            .then(res => res.json())
            .then(res => {
                setCategory(res);
                setItems(res.items);
            })
            .catch(error => console.log(error));
        setCart([localStorage.getItem('cart-items')]);
        console.log(localStorage.getItem('cart-items'));
    }, [props.id]);

    function handlePageUpdate() {
        setItemsToShow(items.slice(firstItem, lastItem));
    }

    function handleShowNextPage() {
        const newFirstItem = firstItem + NUM_ITEMS_SHOW;
        const newLastItem = lastItem + NUM_ITEMS_SHOW;
        setFirstItem(newFirstItem);
        setLastItem(newLastItem);
    }

    function handleShowPrevPage() {
        const newFirstItem = firstItem - NUM_ITEMS_SHOW;
        const newLastItem = lastItem - NUM_ITEMS_SHOW;
        setFirstItem(newFirstItem);
        setLastItem(newLastItem);
    }

    let active = 1;
    let buttons = [];
    for (let n = 1; n <= NUM_ITEMS_SHOW; n++) {
        buttons.push(
            <Pagination.Item key={n} active={n === active} value={n} onClick={changeActive}>
                {n}
            </Pagination.Item>,
        )
    }

    function changeActive(event) {
        active++;
    }

    const paginationButtons = (
        <div>
            <Pagination>{buttons}</Pagination>
        </div>
    );

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
                            <Row id={`item-${item.id}`}>
                                <Col md={2}>
                                    <Card>
                                        <Card.Img variant="top" height={200} src={item.image} />
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                            <Card.Text className="fw-bold">£{item.price}</Card.Text>
                                        </Card.Body>
                                        {/* FUNCTIONALITY */}
                                        <Button variant="primary" onClick={() => handleAddToCart(item.id)}>Add to Cart</Button>
                                    </Card>
                                </Col>
                            </Row>
                        )
                    })
                }
                {paginationButtons}
                <button onClick={clearLocalStorage}>Clear Local Storage</button>
            </div>
        </>
    );
}

export default Product;