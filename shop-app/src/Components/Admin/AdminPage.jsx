import "../../Design/AdminPage.css";
import Button from 'react-bootstrap/Button';
import { Row } from "react-bootstrap";

function AdminPage() {

    return (
        <div className="container">
            <header className="title">Admin Page</header>
            <h3 className="select">Select what you would like to do from the following...</h3><br/>
            <>
            <h5>Catagories</h5>
                <Button >Add Sale Item</Button>{' '}

                <Button>Delete Item</Button>{' '}
                <Button> Update Item</Button>{' '}
                <Button> Add Catagory</Button>{' '}
                <h5>Sale</h5>
                <Button> Add Catagory</Button>{' '}
                <Button> Add Catagory</Button>{' '}
            </>
        </div>

    )
}

export default AdminPage