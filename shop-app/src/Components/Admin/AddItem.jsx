import { useState, useEffect } from "react";
import axios from 'axios';
import "../../Design/AddItem.css"

function AddItemToPage() {
    const [categories, setCategories] = useState([])
    const [inputs, setInputs] = useState({ iTitle: "", iImage: "", iPrice: 0, iDesc: "", iCategory: 0 });

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then(res => res.json())
            .then(res => {
                setCategories(res);
            })
            .catch(err => {
                alert("ERROR - check console log");
                console.log(err);
            });
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(name, value);
        let newInputs = inputs;
        newInputs[name] = value;
        setInputs(newInputs);
    }

    function checkIfURL(link) {
        try {
            let url;
            url = new URL(link);
        } catch (error) {
            console.log(error);
            return false;
        }

        return true;
    }

    function checkIfPrice(price) {
        return !isNaN(price);
    }

    function checkIfCategory(id) {
        return !(id < 1);
    }

    function handleSubmitForm() {
        const title = inputs.iTitle;
        const price = parseFloat(inputs.iPrice);
        const description = inputs.iDesc;
        const categoryId = inputs.iCategory;
        const image = inputs.iImage;

        //client-side validations
        if (!checkIfCategory(categoryId)) return alert("Category is not a valid category");
        if (!checkIfPrice(price)) return alert("Price is not a valid price");
        if (!checkIfURL(image)) return alert("Image is not a valid URL");

        const newItem = {
            title,
            price,
            image,
            description,
        }

        axios.post(`http://localhost:8080/categories/${categoryId}/items`, newItem)
        .then(() => {
            alert('Item has been created');
            window.location.href = "/view-all";
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="addItemContainer">
            <form className='form'>
                <h2 className='addItemTitle'>ADD ITEM</h2>
                <div className="each">
                    <select 
                        className="selectOption" 
                        name="iCategory"
                        required
                        onChange={handleInputChange}
                    >
                        <option value={0}>Select a Category</option>
                        {
                            categories.map(category => {
                                return (
                                    <option value={category.id}>{category.name.toUpperCase()}</option>
                                )
                            })
                        }

                    </select>
                </div>
                <div className='each'>
                    <label> Title: </label >
                    <input type="text"
                        name="iTitle"
                        placeholder='Name'
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className='each'>
                    <label> Price </label>
                    <input
                        name="iPrice"
                        placeholder='Price'
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className='each'>
                    <label> Image URL </label>
                    <input
                        name="iImage"
                        type="url"
                        placeholder='Image URL'
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className='each'>
                    <label> Description </label>
                    <input
                        name="iDesc"
                        type="text"
                        placeholder='Description'
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className='submitBtn' onClick={handleSubmitForm}>Submit</button>
            </form>

        </div>
    )
}
export default AddItemToPage;