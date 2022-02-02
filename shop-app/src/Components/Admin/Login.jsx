import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import "../../Design/Login.css"
import { ConeStriped } from 'react-bootstrap-icons';
import Stack from 'react-bootstrap/Stack';

function AdminLogin() {

    function Success() {
        window.location = ('http://localhost:3000/admin');

    }

    return (
        <div>
            <h2 className='header'><header><i className="bi bi-cone-striped"><ConeStriped /></i> Admins Only <i class="bi bi-cone-striped"><ConeStriped /></i></header></h2>
            <Stack>
                <Form style={{ padding: '100px' }}>
                    <Form.Group as={Row} className="login" controlId="formGroupPassword">
                        <Col sm={5}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Username" />
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Button variant="outline-success" onClick={() => Success()} className="mb-2">
                                Submit
                            </Button>
                        </Col>
                    </Form.Group>

                </Form>
            </Stack>
        </div>
    )
}
export default AdminLogin;