import { useState, useEffect } from 'react';

function DisplayAllCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/categories')
            .then(res => res.json())
            .then(res => {
                setCategories(res);
            })
            .catch(err => console.log(err));
    }, []);

    return(
        <>
        <h1>All Categories</h1>
        {
            categories.map(category => {
                return(
                    <h2>{category.name}</h2>
                )
            })
        }
        </>
    )
}

export default DisplayAllCategory;