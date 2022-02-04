import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import CartPage from './Components/CartPage/CartPage';
import Productpage from './Components/Product-page/Productpage';
import Item from './Components/SingleItem/item';
import Error404 from './Components/ErrorPages/Error404'
import Header from './Components/Homepage/Header';
import Footer from './Components/Homepage/Footer';
import AdminLogin from './Components/Admin/Login';
import AdminPage from './Components/Admin/AdminPage';
import DisplayAll from './Components/Admin/DisplayAll';
import AddItemToPage from './Components/Admin/AddItem';
import DisplayAllCategory from './Components/Admin/DisplayAllCategory';

import {useEffect, useState} from 'react';

function Main() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [items, setItemsValues] = useState([]);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    useEffect( () => {
        fetch("http://localhost:8080/items").then(res => res.json()).then(
            (response) => {
            setItemsValues(response.map(x=>x));
        }, (error) => {
            setLoading(true);
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<App role="admin"/>} />
                <Route path="/category/:id" element={<Productpage />} />
                <Route path="/cart" element={(items.length==0) ? <h1>Loading...</h1> : <CartPage items={items} loading={loading}/> } />
                <Route path="/product/:id" element={<Item />} /> 
                <Route path="*" element={<Error404/>}/>
                <Route path="/access-login/admin" element={<AdminLogin />}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/view-all" element={<DisplayAll />}/>
                <Route path="/add-item" element={<AddItemToPage/>}/>
                <Route path="/view-all/categories" element={<DisplayAllCategory />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Main;


/* for presentation:

After doing research, it was made apparent that most mainstream 
e-commerce websites use at least some sort of front end but always back-end 
verifications when dealing with baskets and payments. 

In this case, all transactions and baskets would have to be stored in some form of database.

This exceeds the limitations of our project so we decided to store only the IDs' of the basket items 
and get the rest of the transaction details from the back end. This ensures malicious users could not 
manipulate the cost of the items. 

*/