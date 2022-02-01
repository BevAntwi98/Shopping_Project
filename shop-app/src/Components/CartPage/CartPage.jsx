import { Button, Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Footer from '../Homepage/Footer';
import CartItem from './CartItems';
import '../../Design/CartPage.css';

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    let newItems = [];
    useEffect(() => {
        if (!(localStorage.getItem('cart-items'))) return;
        newItems = (JSON.parse(localStorage.getItem('cart-items'))).filter(item => item !== null);
        setCartItems(newItems);
        console.log(cartItems);
    }, []);

    const row4 = {
        margin: 0,
        top: "80%",
        right: 60,
        left: 'auto',
        position: 'fixed',
    }

    return (
        <div className="cart-pg-container">
            <h1>Shopping Cart</h1>
            <Container>
                {
                    cartItems.map(item => <CartItem title={item.title} image={item.image} price={item.price} />)
                }
                
            </Container>
            <Container>
                <Row style={row4} xs="auto">
                    <Col>
                        <Button>Checkout</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}