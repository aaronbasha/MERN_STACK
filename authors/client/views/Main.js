import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [authors, setAuthors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => console.error(err));
    }, []);


    const removeFromDom = id => {
        setAuthors(authors.filter(author => author._id !== id));
    }

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/author/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => {
                console.error(err)
            });
    }

    const editAuthor = (id) => {
        navigate('/author/' + id)
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <a href="/new">Add an author</a>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>{authors.map((author, key) => {
                        return (
                            <p key={key}>
                                {author.name}
                                <button onClick={() => {
                                    editAuthor(author._id)
                                }}> Edit </button> 
                                |
                                <button onClick={() => {
                                    deleteAuthor(author._id)
                                }}> Delete</button>
                            </p>
                        )
                    })}</tr>
                </tbody>
            </table>

        </div>
    )
}

export default Main;

