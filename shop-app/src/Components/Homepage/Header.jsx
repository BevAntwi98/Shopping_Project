import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Cart, Lock } from "react-bootstrap-icons"

import { Link } from 'react-router-dom';


function Header(props) {

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
    const row1 = {
        backgroundColor: "lightgrey"
    }

    function homepagebutton() {
        window.location = "/"
    }
    return (
        <Container>
            <Row style={row1}>
             <Col sm={3}>   <Link to="/" style={{ textDecoration: 'none' }}><h1 style={title1}  >{props.name}</h1></Link></Col>
                <Col sm={6} style={links}>
                    <Link to="/products/3" > Electronics      </Link> |
                    <Link to="/products/2" > Jewellery        </Link> |
                    <Link to="/products/1" > Men's Clothing   </Link> |
                    <Link to="/products/4" > Women's Clothing </Link>
                </Col>
                <Col style={icon}><Link to={"/cart"}><Cart size={40} /></Link> </Col>
                <Col style={icon}> <Lock size={40} /></Col>
            </Row>
        </Container>
    )
}

export default Header;