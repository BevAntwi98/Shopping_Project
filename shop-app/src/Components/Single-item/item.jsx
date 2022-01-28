import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Item() {
  const params = useParams();
  const [item, setItemState] = useState([]);
  const [isRead, setReadState] = useState(false);

  useEffect(() => {
    if (!isRead) {
      fetch(`http://localhost:8080/items/${params.id}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setItemState(res);
          setReadState(true);

        })
        .catch((error) => console.log(error));
    }
  });

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
