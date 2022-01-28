import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Product from './Components/Product-page/Product';
import Item from './Components/Single-item/item';


function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/product/:id" element={<Item />} /> 
            </Routes>
        </Router>
    );
}

export default Main;