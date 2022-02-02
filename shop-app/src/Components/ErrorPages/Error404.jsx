import React from 'react';
import "../../Design/Error404.css"
import { DashCircleFill } from "react-bootstrap-icons"
import Header from '../Homepage/Header.jsx';
import error from "../images/404.png"; // Import image


const Error404 = () => {
    return (
        <div>
            {/* <h1 className='title'>404</h1> */}
            <img className='error_image' src={error} />
            <h3 className='error_message'><i className="bi bi-dash-circle-fill"><DashCircleFill /></i> Sorry, this page cannot be found! <i class="bi bi-dash-circle-fill"><DashCircleFill /></i></h3>
            <h6 className='suggestions'>Try clicking on a category to find an item</h6>
        </div>
    );
};

export default Error404;
