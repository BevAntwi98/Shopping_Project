import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Design/DisplayAllCategory.css';

function DisplayAllCategory() {
    const [categories, setCategories] = useState([]);
    const [inputAdd, setInputAdd] = useState("");
    const [currentId, setCurrentId] = useState(0);
    const [inputEdit, setInputEdit] = useState("");
    const [toggle, setToggle] = useState(true);
    const [toggleAdd, setToggleAdd] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/categories')
            .then(res => res.json())
            .then(res => {
                setCategories(res);
            })
            .catch(err => console.log(err));
    }, [toggle, toggleAdd]);

    function capitaliseFirstLetter(name) {
        let newName = [];
        for (let i = 0; i < name.length; i++) {
            i === 0 ? 
            newName.push(name[i].toUpperCase()) : 
            newName.push(name[i]);
        }
        return newName.join("");
    }

    function handleAddInputChange(event) {
        setInputAdd(event.target.value);
    }

    function handleEditInputChange(event) {
        setCurrentId(event.target.id);
        setInputEdit(event.target.value);
    }

    function handleEditCategory() {
        const name = inputEdit.toLowerCase();
        const id = currentId;
        const updatedCategory = {
            name
        }

        axios
        .patch(`http://localhost:8080/categories/${id}`, updatedCategory)
        .then(() => {
            alert('category updated');
            window.location = "/view-all/categories";
        })
        .catch(err => {
            alert('could not be updated');
            console.log(err);
        });
    }

    function handleDeleteCategory(id) {
        axios
        .delete(`http://localhost:8080/categories/${id}`)
        .then(() => {
            alert('category deleted');
            window.location = "/view-all/categories";
        })
        .catch(err => {
            alert('could not be deleted');
            console.log(err);
        });
    }

    function handleAddCategory() {
        const name = inputAdd.toLowerCase();
        const newCategory = {
            name
        }

        axios
        .post(`http://localhost:8080/categories`, newCategory)
        .then(() => {
            alert('category added');
            window.location = "/view-all/categories";
        })
        .catch(err => {
            alert('could not be added');
            console.log(err); 
        });
    }

    function handleToggleAdd() {
        return toggleAdd ? (
            <div className="category-func">
                <button id="category-add" onClick={() => setToggleAdd(false)}>Add category</button>
                <button id="category-edit" onClick={() => setToggle(false)}>Edit</button>
            </div>
        ) : (
            <>
            <input onChange={handleAddInputChange} placeholder="Category name"/>
            <div className="category-func">
                <button id="category-add" onClick={handleAddCategory}>Add</button>
            </div>
            </>
        )
    }

    return toggle ? (
        <div className="category-all-container">
            <h1 >All Categories</h1>
            <div className="category-all">
            {
                categories.map(category => {
                    return(
                        <div className="category-single">
                            <button 
                                class="category-delete"
                                onClick={() => handleDeleteCategory(category.id)} 
                            > 
                            x
                            </button>
                            <h2>{capitaliseFirstLetter(category.name)}</h2>
                        </div>
                    )
                })
            }
            
            {
                handleToggleAdd()
            }
            </div>
        </div>
    ) : (
        <div className="category-all-container">
            <h1 >All Categories</h1>
            <div className="category-all">
            {
                categories.map(category => {
                    return(
                        <div className="category-single">
                            <button onClick={() => handleDeleteCategory(category.id)} class="category-delete"> x </button>
                            <input 
                                id={category.id}
                                onChange={handleEditInputChange}
                                name="categoryName" 
                                className="category-name-input" 
                                placeholder={capitaliseFirstLetter(category.name)} 
                            />
                        </div>
                    )
                })
            }
                <div className="category-func">
                    <button 
                        id="category-submit" 
                        onClick={handleEditCategory}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
    
}

export default DisplayAllCategory;