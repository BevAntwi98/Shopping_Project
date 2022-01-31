import { Button, Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Footer from '../Homepage/Footer';
import Header from '../Homepage/Header';
import CartItem from './CartItems';

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    let newItems = [];
    // const footer={
    //     margin: 0,
    //     top: "93%",
    //     width: "90%",
    //     position: 'fixed',
    // }

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
        <>
        <Header />
        <h1 style={{textAlign: "center"}}>Shopping Cart</h1>
        <Container>
            {
                cartItems.map(item => <CartItem title={item.title} image={item.image} price={item.price}/>)
            }
            {/* BUTTON ROW */}
            <Row style={row4} xs="auto">
                <Col>
                    <Button>Checkout</Button>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )


}