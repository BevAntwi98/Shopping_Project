import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heart } from "react-bootstrap-icons"

import '../../Design/SingleItemPage.css'
function Item() {
  const params = useParams();
  const [item, setItemState] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/items/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setItemState(res);
      })
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
      <>
      <div className="details">
        <div className="img">
          <img src={item.image} alt={item.description}/>
        </div>

        <div className="infoSection">
          <div className="row">
            <h2 className="itemTitle">{item.title}</h2>
            <span>£{item.price}</span>
            <p>{item.description}</p>
          </div>
          <button className="cart-btn">Add to Cart</button><i className='icon'> <Heart size={35} /></i>
        </div>
      </div>
      </>
  );
}

export default Item;
