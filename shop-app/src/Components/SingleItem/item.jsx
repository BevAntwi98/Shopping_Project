import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


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
          <img src={item.image} />
        </div>

        <div className="infoSection">
          <div className="row">
            <h2 className="title">{item.title}</h2>
            <span>£{item.price}</span>
            <p>{item.description}</p>
          </div>
          <button className="cart-btn">Add to Cart</button> <i>Heart Icon</i>
        </div>
      </div>
      </>
  );
}

export default Item;
