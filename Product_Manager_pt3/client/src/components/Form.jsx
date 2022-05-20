//import React, {useState} from 'react'
import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {

    // DECLARE STATE
    // Make sure you import {useState} above. example code: import React, {useState} from 'react'
    // example code:
    // const [title, setTitle] = useState("") "should match the model.js file in the mongodb"
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("0")
    const [description, setDescription] = useState("")

    // DESTRUCTURE
    const { refresh } = props


    // HANDLER FUNCTIONS
    const createHandler = event => {
        event.preventDefault()
        // CREATE OBJECT WITH THE PRODUCT INFO
        const productObj = {
            title,
            price,
            description
        }
        // MAKE POST REQUEST TO EXPRESS WITH productobj
        axios.post("http://localhost:8000/api/products/new", productObj)
            .then(res => {
                refresh()
                setTitle("")
                setPrice(0)
                setDescription("")
            })
            .catch (err => console.log(err))
    }

// FORM 
// onchange example code 
// onChange={(e) => setTitle(e.target.value)} />
// <input type="text" name="title" id="" onChange={(e) => setTitle(e.target.value)} />
return (
    <fieldset>
        <legend>FormComponent.jsx</legend>
        <form onSubmit={createHandler}>
            <p>
                Title
                <input type="text" name="title" id="" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                Price
                <input type="number" name="price" id="" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                Description
                <input type="text" name="description" id="" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <button>Create</button>
        </form>  
    </fieldset>
)
}
export default Form