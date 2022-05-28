import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
    
const CreateAuthor = (props) => {
    const [author, setAuthor] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState ([])


    const createAuthor = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/author', {
            name: author
            })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                const errRes = err.response.data.errors
                const temp = []
                for (let keys of Object.keys(errRes)) {
                    temp.push(errRes[keys].message)
                }
                console.log(temp, "this is temp")
                setError(temp)
            })
    }

    const Cancel = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <a href="/">Home</a>
            <p>Add a new author</p>
            <form onSubmit={createAuthor}>
                <label>Name:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={Cancel}>Cancel</button>
            {
                error.map((err, key) => {
                    return(

                    <p style={{ color: "red" }} key={key}>
                        {err}
                    </p>
                    )
                })
            }
        </div>
    )
}
    
export default CreateAuthor;
