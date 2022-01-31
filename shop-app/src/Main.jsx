import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import CartPage from './Components/CartPage/CartPage';
import Productpage from './Components/Product-page/Productpage';
import Item from './Components/SingleItem/item';



function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/products/:id" element={<Productpage />} />
                <Route path="/cart" element={<CartPage/> } />
                <Route path="/product/:id" element={<Item />} /> 
            </Routes>
        </Router>
    );
}

export default Main;