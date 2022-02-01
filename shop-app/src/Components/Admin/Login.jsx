import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';


function AdminLogin() {


    function Success() {
      

     
            window.location = ('http://localhost:3000/admin')
       
    }



    return (
        <div>
            <h2>Welcome</h2>
            <Form style={{ padding: '100px' }}>
                <Form.Group as={Row} className="mb-3" controlId="formGroupPassword">
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={4}>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                    <Col sm={2}>
                        <Button value onClick={() => Success()} className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Form.Group>

            </Form>
        </div>
    )
}
export default AdminLogin;