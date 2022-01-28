import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Cart, Lock } from "react-bootstrap-icons";
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from '../Homepage/Footer';

export default function CartPage() {
    const title1 = {
        textAlign: "left",
        padding: "10px",
        color: "black"
    }
    const links = {
        textAlign: "center",
        padding: "27px"
    }
    const icon = {
        padding: "17px",
        color: "purple",
    }
    const mid = {
        textAlign: "center",
        padding: "20px",

    }
    const row1 = {
        backgroundColor: "lightgrey"
    }
    const row3={
        paddingTop:"20px"
    }
    const row4 = {
        margin: 0,
        top: "80%",
        right: 60,

        left: 'auto',
        position: 'fixed',
    }
    // const footer={
    //     margin: 0,
    //     top: "93%",
    //     width: "90%",
    //     position: 'fixed',
    // }
    return (
        <Container>
            {/* HEADER ROW */}
            <Row style={row1}>
           <Col sm={3} > <Link to="/" style={{ textDecoration: 'none' }}><h1 style={title1}  >Online Store</h1></Link></Col>
                <Col sm={6} style={links}>
                    <Link to="/products/3">Electronics</Link> |
                    <Link to="/products/2">  Jewllery</Link> |
                    <Link to="/products/1"> Men's Clothing</Link> |
                    <Link to="/products/4"> Women's Clothing</Link>
                </Col>
                <Col style={icon}><Link to={"/cart"}><Cart size={40} /></Link> </Col>
                <Col style={icon}> <Lock size={40} /></Col>
            </Row>
            {/* SHOPPING CART TITLE ROW */}
            <Row>
                <Col style={mid}><h1>Shopping Cart</h1></Col>
            </Row>
            {/* ITMES DISPLAY ROW */}
            <Row style={row3}>
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" height={180}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKi2Hr6NxPs3D1lwjQf3bKh-ZJvjaVm2Rwg&usqp=CAU" />
                        </Card>
                    </Col>))}
                <Col md={5}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card.Text>
                       £90
                    </Card.Text>
                </Col>
            </Row>
            {/* BUTTON ROW */}
            <Row style={row4} xs="auto">
                <Col>
                    <Button>Checkout</Button>
                </Col>
            </Row>
            <Row>
                <Footer></Footer>
            </Row>

        </Container>
    )


}