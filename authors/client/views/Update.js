import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'


const Update = () => {
    const [authors, setAuthors] = useState('')
    const { id } = useParams();
    const navigate = useNavigate()
    const [error, setError] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setAuthors(res.data.name);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [id]);

    const updateAuthor = (e) => {
        e.preventDefault();
        console.log(id)
        axios.put(`http://localhost:8000/api/author/${id}`, {
            name: authors
        })
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                const errRes = err.response.data.errors
                const temp = []
                for (let keys of Object.keys(errRes)) {
                    temp.push(errRes[keys].message)
                }
                console.log(temp)
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
            <p style={{color: "green"}}>Edit this author</p>
            <form onSubmit={updateAuthor}>
                <label>Name: </label>
                <input type="text" value={authors} onChange={(e) => setAuthors(e.target.value)} /><br></br>

                <input type="submit" value="Confirm Edit"/>
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

export default Update