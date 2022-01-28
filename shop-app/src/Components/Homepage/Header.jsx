import { Link } from 'react-router-dom';


function Header(props) {

    return (
        <div>
            <header>
                <h1 style={{ textAlign: "left", width: "100px" }}>{props.name}</h1>
                <h4 style={{ textAlign: "right" }}>
                    <Link to="/products/3">Electronics</Link> | 
                    <Link to="/products/2">Jewllery</Link> | 
                    <Link to="/products/1">Men's Clothing</Link> | 
                    <Link to="/products/4">Women's Clothing</Link> 
                </h4>
            </header>
        </div>


    )
}

export default Header;