// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Cart, Lock } from "react-bootstrap-icons"

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
    }, []);

    function handleShowNav() {
        const menu = document.querySelector("#mobile-menu");
        const menuLinks = document.querySelector(".nav-menu");
        menu.classList.toggle("is-active");
        menuLinks.classList.toggle("active");
    }

    return (
        <header className='header-container'>
            <h1>Online Shop</h1>
            <nav className="nav-menu">
                <Link className='nav-links' to="/">ALL</Link>
                {
                    categories.map(category => {
                        return (
                            <a className='nav-links' href={`/category/${category.id}`}>{category.name.toUpperCase()} </a>
                        )
                    })
                }
            </nav>
            <div className='icons'>
                <i className='icon'><Link id="cart-icon" className='icon-link' to="/cart"><Cart size={40} /></Link></i>
                <i className='icon'><Link id="lock-icon" className='icon-link' to=""><Lock size={40} /></Link></i>
                <div class="nav-toggle" id="mobile-menu" onClick={handleShowNav}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </header>
    )
}

export default Header;