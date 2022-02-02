import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export default function CartItem(props) {
    const [counter, setCounter] = useState(1);
    
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

    function handleCounterUpdate(add) {
        if (add) {
            setCounter(counter + 1);
        } else {
            if (counter === 0) return;
            setCounter(counter - 1);
        }
    }

    return (
        <>
            {/* ITMES DISPLAY ROW */}
            <Row data-testid='cart-1' style={row3}>
                <Col md={4}>
                    <Card data-testid={`${props.id}`}>
                        <Card.Img variant="top" height={180}  src={props.image} />
                    </Card>
                </Col>
                <Col md={5}>
                    <Card>
                        <Card.Body >
                            <Card.Title style={{fontSize: "1rem"}}>{props.title}</Card.Title>
                            <Card.Text style={{fontSize: "1.5rem", fontWeight: "600"}}>£{props.price}</Card.Text>
                            <div style={{border: "1px solid black", width: "25px", textAlign: "center", borderRadius: "5px", marginBottom: "5px"}}>{counter}</div>
                            <Button onClick={() => handleCounterUpdate(true)}>+</Button> <Button onClick={() => handleCounterUpdate(false)}>-</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )


}