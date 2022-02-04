import error from "../images/404.png"; // Import image
import { DashCircleFill } from "react-bootstrap-icons"
import Header from '../Homepage/Header.jsx';

export default function noPage(){
    return(
        <img className='error_image' src={error} />
        <h3 className='error_message'><i className="bi bi-dash-circle-fill"><DashCircleFill /></i> Sorry, this product cannot be found! <i className="bi bi-dash-circle-fill"><DashCircleFill /></i></h3>
    )
}
// design to be added