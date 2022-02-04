import { Button, Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import CartItem from './CartItems';
import Cart from '../CartLogic/Cart';
import '../../Design/CartPage.css';

export default function CartPage({items,loading}) {
    let [cart,setCart] = useState(new Cart(0));   // Cart: content -> Items: id, quantity
    const [updateCart,setUpdateCart] = useState(false);
    let itemInfo = [];

    useEffect(() => {
        if (!(localStorage.getItem('cart'))) return;
        setCart(Cart.convertToCartObject(JSON.parse(localStorage.getItem('cart'))._content));
    }, []);

    useEffect(() => {
        if (cart.content.length==0) return;
        cleanUpCart();
    }, [updateCart]);

    const cleanUpCart = ()=> {
        let tempCart = cart;
        tempCart.content.forEach(item => {
            if (item._quantity == 0 || item._quantity == null){
                tempCart.removeFromCart(item._id);
            }
        });
    }

    const setCounter = (id,quantity) => {
        if (!verifyNewQuantity(id,quantity)) return;

        let tempCart = cart;
        tempCart.setItemQuantity(id,quantity);
        setCart(tempCart);
        setUpdateCart(!updateCart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const deleteItem = (id) => {
        let tempCart = cart;
        tempCart.removeFromCart(id);
        setCart(tempCart);
        setUpdateCart(!updateCart);
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location = "/cart";
    }

    const verifyNewQuantity = (id,quantity) => {
        if (cart.getItemCount(id)>=999 || (cart.getItemCount(id)+quantity)>999){
            cart.setItemQuantity(id,999);
            return false;
        }
        return true;
    }

    const styling = {
        row4 : {
            margin: 0,
            top: "80%",
            right: 60,
            left: 'auto',
            position: 'fixed',
        }
    }

    const fillBasketItems = () => {
        let basketContent = [];
        cart.content.forEach(cartProduct => {
            items.forEach(stock=>{
                if (stock.id == cartProduct.id){
                    basketContent.push(stock);
                
                }
            });
        });
        itemInfo = basketContent;
    }


    fillBasketItems();

    if (cart===new Cart(0)){
        return(<div><h1><center>Loading..</center></h1></div>);
    }

    return(<CartInterface itemInfo={itemInfo} deleteItem={deleteItem} setCounter={setCounter} cart={cart} styling={styling}/>);
}


const CartInterface = ({itemInfo,setCounter,cart,styling,deleteItem}) => {


    try{
        return(
        <div className='cart-pg-container'>
            <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>
            <Container>
                {
                    cart.content.map(item => 
                        <CartItem 
                            deleteItem={deleteItem}
                            setCounter={setCounter} 
                            id={item.id}
                            counter={item._quantity}
                            title={itemInfo.filter(info => info.id == item.id).map(info => info.title)} 
                            image={itemInfo.filter(info => info.id == item.id).map(info => info.image)} 
                            price={itemInfo.filter(info => info.id == item.id).map(info => info.price)} 
                        />)
                }
                
            </Container>
            <Container>
                <Row style={styling.row4} xs="auto">
                    <Col>
                        <Button className='checkoutBtn'>Checkout</Button>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }catch(err){
        console.error(err);
    }
}



/*

Sequelize is a promise-based Node.js ORM for MySQL and other database types.
It features solid transaction support, relations, read replication and more.

Use the ORM for speeding up development of simple, repetitive queries.

nesting of data is easier as we can establish relationship between objects

this makes developing using queries from multiple tables way more efficient.

*/
