import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import '../../Design/Product.css'
import Cart from '../CartLogic/Cart';
import ItemProduct from '../CartLogic/ItemProduct';


function Product(props) {
    const NUM_ITEMS_SHOW = 8;
    let [cart,setCart] =  useState(new Cart(0));
    const [category, setCategory] = useState({});
    const [items, setItems] = useState([]);
    const [itemsToShow, setItemsToShow] = useState([]);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(NUM_ITEMS_SHOW);
    const [active, setActive] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:8080/categories/${props.id}`)
            .then(res => res.json())
            .then(res => {
                let responseItems = res.items;
                // const length = responseItems.length
                // for (let j = 0; j < 10; j++) {
                //     for (let i = 0; i < length; i++) {
                //         responseItems.push(res.items[i]);
                //     }
                // }
                setCategory(res);
                setItems(responseItems);
                setItemsToShow(responseItems.slice(firstIndex, lastIndex));
            })
            .catch(error => console.log(error));
        if (!(localStorage.getItem('cart'))) return; 
        setCart(Cart.convertToCartObject(JSON.parse(localStorage.getItem('cart'))._content));
    }, [props.id, active]);

    function handlePageUpdate(n) {
        setActive(n);
        setFirstIndex((NUM_ITEMS_SHOW * n) - NUM_ITEMS_SHOW);
        setLastIndex(NUM_ITEMS_SHOW * n);
    }

    let buttons = [];
    for (let n = 1; n <= Math.ceil(items.length / NUM_ITEMS_SHOW); n++) {
        buttons.push(
            <Pagination.Item className="pg-btn" key={n} active={n === active} onClick={() => handlePageUpdate(n)}>
                {n}
            </Pagination.Item>,
        )
    }

   
    // Adding to cart functionality
    function handleAddToCart(id,quantity=1) {
        let tempCart = cart;
        tempCart.addToCart(new ItemProduct(id, quantity));

        localStorage.setItem('cart', JSON.stringify(tempCart));
        alert('Added to Cart ');
    }

    return (
        <div className="categoryContainer">
            <div className="categoryTitle">
                <h1 className="text-center">{category.name}</h1>
            </div>
            <div className="productCards">
                {
                    itemsToShow.map(item => {
                        return (
                            <figure className="eachProductCard" data-testid='card-1'>
                                <a className='productCardImage' href={`/product/${item.id}`}><img className='productCardImage' src={item.image} alt={item.description} /></a>
                                <figcaption>
                                    <a className="productCardTitle" href={`/product/${item.id}`}><p>{item.title}</p></a>
                                    <a className="productCardPrice" href={`/product/${item.id}`}>£{item.price}</a>
                                </figcaption>
                                <button className='productCartBtn' onClick={() => { handleAddToCart(item.id) }}>Add to Cart</button>
                            </figure>
                        )
                    })
                }
            </div>
            <div className="pagination">
                <Pagination className="pg-btn-container">{buttons}</Pagination>
            </div>
        </div>
    );

}
export default Product