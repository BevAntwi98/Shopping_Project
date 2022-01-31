import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Cart, Lock } from "react-bootstrap-icons"

import { Link } from 'react-router-dom';
import "./Header.css"


function Header(props) {

    

    function homepagebutton() {
        window.location = "/"
    }
    return (
        <div className='container'>
            <Row className='row1'>
             <Col sm={3}>   <Link to="/" style={{ textDecoration: 'none' }}><h1 className='title'  >{props.name}</h1></Link></Col>
                <Col sm={6} className='links'>
                    <Link to="/products/3 "className='link'> Electronics      </Link> |
                    <Link to="/products/2" className='link'> Jewellery        </Link> |
                    <Link to="/products/1" className='link'> Men's Clothing   </Link> |
                    <Link to="/products/4" className='link'> Women's Clothing </Link>
                </Col>
                
                <Col className='icons'>
                <i className='icon'><Link to={"/cart"}><Cart size={40} /></Link></i>
                <i className='icon'> <Lock size={40} /></i>
                </Col>
                
            </Row>
        </div>
    )
}

export default Header;