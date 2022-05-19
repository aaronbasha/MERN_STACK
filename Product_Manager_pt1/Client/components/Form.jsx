//import React, {useState} from 'react'
import React, {useState} from 'react'

const Form = () => {

    // DECLARE STATE
    // Make sure you import {useState} above. example code: import React, {useState} from 'react'
    // example code:
    // const [title, setTitle] = useState("") 
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("0")
    const [description, setDescription] = useState("")


    // HANDLER FUNCTIONS
// onchange example code 
// onChange={(e) => setTitle(e.target.value)} />
// <input type="text" name="title" id="" onChange={(e) => setTitle(e.target.value)} />
    return (
        <fieldset>
            <legend>FormComponent.jsx</legend>
            <form action="">
                <p>
                    Title
                    <input type="text" name="title" id="" onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    Price
                    <input type="number" name="price" id="" onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    Description
                    <input type="text" name="description" id="" onChange={(e) => setDescription(e.target.value)} />
                </p>
                <button>Create</button>
                </form>
        </fieldset>
    )
}
export default Form