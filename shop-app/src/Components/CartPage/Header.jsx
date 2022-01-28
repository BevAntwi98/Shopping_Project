import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartHeader(props) {
    const title1 = {
        textAlign: "center",
        padding: "10px"
    }

    return (
        <Container>
            <Row>
                <Col sm={3}><h1 style={title1}>{props.name}</h1></Col>
                <Col sm={6} style={links}>Electronics | Jewllery | Men's Clothing | Women's Clothing</Col>
                <Col style={icon}> <Cart size={40} /> </Col>
                <Col style={icon}> <Lock size={40} /></Col>
            </Row>

            

        </Container>
    )


}