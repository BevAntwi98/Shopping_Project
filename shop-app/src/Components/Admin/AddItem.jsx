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
        let newInputs = inputs;
        newInputs[name] = value;
        setInputs(newInputs);
    }

    function checkIfURL(link) {
        let url = link
        try {
            url = new URL();
        } catch (error) {
            console.log(error);
            return false;
        }

        return true;
    }

    function handleSubmitForm() {
        const title = inputs.iTitle;
        const price = parseFloat(inputs.iPrice);
        if (!price) {
            alert("Price is not a valid price");
            return;
        }
        const description = inputs.iDesc;
        const id = inputs.iCategory;
        let image; 
        if (checkIfURL(inputs.iImage)) {
            image = inputs.iImage;
        } else {
            alert("Image is not a valid URL");
            return;
        }

        const newItem = {
            title,
            price,
            image,
            description,
        }
        console.log(newItem);

        axios.post(`http://localhost:8080/categories/${id}/items`, newItem)
        .then(() => {
            alert('Item has been created');
            window.location.href = "/view-all";
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="addItemContainer">
            <div className='form'>
                <h2 className='addItemTitle'>ADD ITEM</h2>
                <div className="each">
                    <select 
                        className="selectOption" 
                        name="iCategory"
                        onChange={handleInputChange}
                    >
                        <option>Select a Category</option>
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
                        onChange={handleInputChange}
                    />
                </div>

                <div className='each'>
                    <label> Price </label>
                    <input
                        name="iPrice"
                        placeholder='Price'
                        onChange={handleInputChange}
                    />
                </div>

                <div className='each'>
                    <label> Image URL </label>
                    <input
                        name="iImage"
                        type="url"
                        placeholder='Image URL'
                        onChange={handleInputChange}
                    />
                </div>
                <div className='each'>
                    <label> Description </label>
                    <input
                        name="iDesc"
                        type="text"
                        placeholder='Description'
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className='submitBtn' onClick={handleSubmitForm}>Submit</button>
            </div>

        </div>
    )
}
export default AddItemToPage;