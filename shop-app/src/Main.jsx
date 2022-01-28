import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import CartPage from './Components/CartPage/CartPage';
import Product from './Components/Product-page/Product';


function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/cart" element={<CartPage/> } />
            </Routes>
        </Router>
    );
}

export default Main;