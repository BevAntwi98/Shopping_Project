import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import "../../Design/Login.css"
import { ConeStriped } from 'react-bootstrap-icons';


function AdminLogin() {

    function Success() {
        window.location = ('http://localhost:3000/admin');

    }

    return (
        <div>
            <h2 className='header'><header><i class="bi bi-cone-striped"><ConeStriped /></i> Admins Only <i class="bi bi-cone-striped"><ConeStriped /></i></header></h2>
            <Form style={{ padding: '100px' }}>
                <Form.Group as={Row} className="mb-3" controlId="formGroupPassword">
                    <Col sm={5}>
                        <Form.Control placeholder="Username" />
                    </Col>
                    <Col sm={5}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                    <Col sm={2}>
                        <Button variant="outline-success" onClick={() => Success()} className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Form.Group>

            </Form>
        </div>
    )
}
export default AdminLogin;