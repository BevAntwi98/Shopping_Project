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



function Main() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<App role="admin"/>} />
                <Route path="/category/:id" element={<Productpage />} />
                <Route path="/cart" element={<CartPage/> } />
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