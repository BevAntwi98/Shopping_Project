import "../../Design/AdminPage.css";
import Button from 'react-bootstrap/Button';
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function AdminPage() {

    return (
        <div className="title-container">
            <header className="title">Admin Page</header>
            <h3 className="select">Please select from the following...</h3><br />
            <div className="button-container">
                <Container  style={{textAlign: 'center'}}>
                    <Row> {/* <h5 className="admin-catagories">Sale</h5> */}
                        <Col>
                        <h2 style={{textAlign: 'center'}}>Sale</h2>
                            <Button className="button" variant="outline-info"> Get All Sale Items</Button>{' '}
                            <Button className="button" variant="outline-info"> Add Sale Item</Button>{' '}
                            <Button className="button" variant="outline-danger"> Delete All Sale Items</Button>{' '}
                            <Button className="button" variant="outline-warning"> Update a Sale Item</Button>{' '}
                        </Col>
                    </Row> <br/>
                   
                    <Row>
                        <Col>
                        <h2  style={{textAlign: 'center'}}>Category</h2>
                            <Button className="button" variant="outline-info"> Get All Categories</Button>{' '}
                            <Button className="button" variant="outline-info"> Add Category</Button>{' '}
                            <Button className="button" variant="outline-danger"> Delete a Category</Button>{' '}
                            <Button className="button" variant="outline-warning"> Update a Category</Button>{' '}
                        </Col>

                    </Row>
                </Container>



            </div>
        </div>

    )
}

export default AdminPage