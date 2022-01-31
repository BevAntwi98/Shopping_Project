import Product from "./Product";
import Header from "../Homepage/Header";
import { useParams } from 'react-router-dom';

function Productpage() {
    const params = useParams();
    return(
        <>
            <Product id={`${params.id}`} />
        </>
    )
}

export default Productpage;