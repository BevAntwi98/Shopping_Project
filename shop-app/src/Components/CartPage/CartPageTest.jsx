import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CartPageTest.css"

export default function CartPage() {
    const params = useParams();
    const [item, setItemState] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/items`)
      .then((res) => res.json())
      .then((res) => {
        setItemState(res);
      })
      .catch((error) => console.log(error));
  }, [params.id]);


    return (
        <>
        {/* <div className='container'>
            <header></header>
            <h2>SHOPPING CART</h2>
            <div className='product-container'>
                <div className="product">

                    <div className='img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKi2Hr6NxPs3D1lwjQf3bKh-ZJvjaVm2Rwg&usqp=CAU" alt="" />
                    </div>
                    <div className="info">
                        <h3 className='title'>Title</h3>
                        <p className='description'>Description</p>
                    </div>
                </div>
                    <div className="price-container">
                        <span className='price'>£90</span>
                    </div>
            </div>
            <div className="bottomSec">
                <p>TOTAL: £180</p>
            <button>CHECKOUT</button>
            </div>
            
            
        </div>  */}
         {/* <div className='container'>
            <header></header>
            <h2>SHOPPING CART</h2>
            <div className='product-container'>
                <div className="product">

                    <div className='img'>
                    <img src={item.image} alt="" />
                    </div>
                    <div className="info">
                        <h3 className='title'>{item.title}</h3>
                        <p className='description'>{item.description}</p>
                    </div>
                </div>
                    <div className="price-container">
                        <span className='price'>£{image.price}</span>
                    </div>
            </div>
            <div className="bottomSec">
                <p>TOTAL: £180</p>
            <button>CHECKOUT</button>
            </div>  
        </div> */}
        </>
        
    )


}