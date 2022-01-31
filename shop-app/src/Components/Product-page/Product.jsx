import { useState, useEffect } from 'react';

function Product(props) {
    const [category, setCategory] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {
            fetch(`http://localhost:8080/categories/${props.id}`)
                .then(res => res.json())
                .then(res => {
                    setCategory(res);
                    setItems(res.items);
                })
                .catch(error => console.log(error));
    }, [props.id]);

    return(
        <>
        <div>
            {<h1>{category.name}</h1>}
            {
                items.map(item => {
                    return(
                        <div key={`${category.name}-${item.id}`}>
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