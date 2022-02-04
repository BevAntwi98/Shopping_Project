import "../../Design/AdminPage.css";
import Button from 'react-bootstrap/Button';
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function AdminPage() {

    return (
        <div className="title-container">
            <header className="title">Admin Page</header>
            <p className="select">Please select from the following...</p><br />
            <div className="button-container">
                <Container  style={{textAlign: 'center'}}>
                    <Row> {/* <h5 className="admin-catagories">Sale</h5> */}
                        <Col>
                        <h2 className="admin-heading" >Sale</h2>
                            <Button className="button" variant="info" href="/view-all"> View All Items</Button>{' '}
                        </Col>
                    </Row> <br/>
                   
                    <Row>
                        <Col>
                        <h2 className="admin-heading">Category</h2>
                            <Button className="button" variant="info" href="/view-all/categories"> View All Categories</Button>{' '}
                        </Col>

                    </Row>
                </Container>



            </div>
        </div>

    )
}

export default AdminPage