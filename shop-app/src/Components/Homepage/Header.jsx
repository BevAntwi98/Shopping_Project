// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Product from "../Product-page/Product";
import { Cart, Lock } from "react-bootstrap-icons"
import { CartPlusFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import "../../Design/Header.css";
import { useEffect, useState } from 'react';


function Header() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setCategories(res);
            })
            .catch(err => console.log(err));
    }, [])



    return (
        <header className='header-container'>
            <h1>Online Shop</h1>
            <nav>
                <Link className='links' to="/">ALL</Link>
                {
                    categories.map(category => {
                        return (
                            <Link className='links' to={`/category/${category.id}`}>{category.name.toUpperCase()} </Link>
                        )
                    })
                }
            </nav>
            <div className='icons'>
                <i className='icon'><Link to="/cart"><Cart style={{color: 'white'}} size={40} /></Link></i>
                <i className='icon2'> <Link to="/login"><Lock style={{color: 'white'}} size={40} /></Link></i>
            </div>
        </header>
    )
}

export default Header;