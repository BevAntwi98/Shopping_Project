import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Cart, Lock } from "react-bootstrap-icons"

import { Link } from 'react-router-dom';


function Header(props) {

    const title1 = {
        textAlign: "left",
        padding: "10px"
    }
    const links = {
        padding: "27px"
    }
    const icon = {
        padding: "17px",
        color: "Blue",
    }
    return (
        <Container>
            <Row>
                <Col sm={3} ><h1 style={title1}>{props.name}</h1></Col>
              <Col sm={6}>
                    <Link to="/products/3">Electronics</Link> | 
                    <Link to="/products/2">Jewllery</Link> | 
                    <Link to="/products/1">Men's Clothing</Link> | 
                    <Link to="/products/4">Women's Clothing</Link> 
              </Col>
              <Col style={icon}> <Cart size={40} /> </Col>
                <Col style={icon}> <Lock size={40} /></Col>
                </Row>
            </Container>

    // return (
    //     <Container>
    //         <Row>
    //             <Col sm={3}><h1 style={title1}>{props.name}</h1></Col>
    //             <Col sm={6} style={links}>Electronics | Jewllery | Men's Clothing | Women's Clothing</Col>
    //             <Col style={icon}> <Cart size={40} /> </Col>
    //             <Col style={icon}> <Lock size={40} /></Col>
    //         </Row>

    //     </Container>

    // )
    )}

export default Header;