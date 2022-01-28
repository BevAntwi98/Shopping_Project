import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from "../Homepage/Header";

function Product() {
    const params = useParams();
    const [category, setCategoryState] = useState({});
    const [items, setItemsState] = useState([]);
    const [isRead, setReadState] = useState(false);

    useEffect(() => {
        if (!isRead) {
            fetch(`http://localhost:8080/${params.id}`)
                .then(res => res.json())
                .then(res => {
                    setCategoryState(res);
                    setItemsState(res.items);
                    setReadState(true);
                })
                .catch(error => console.log(error));
        }
    });

    return(
        <>
        <Header name="Online Store" />
        <div>
            {<h1>{category.name}</h1>}
            {
                items.map(item => {
                    return(
                        <div>
                            <h2>{item.title}</h2>
                            <img src={item.image} />
                            <p>£{item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    );
}

export default Product;