import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

const Dashboard = (props) => {

    // State to hold all products from database
    const [allProducts, setAllProducts] = useState([])

    // Destructure form Props
    const { refreshState } = props


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err))
    }, [refreshState])


    return (
        <fieldset>
            <legend>DashboardComponent</legend>
            {
                allProducts.map((product, index) => {
                    return (
                        <div key={index}>
                            <Link to={"/" + product._id}>
                                <h1>{product.title} - {product.description}</h1>
                            </Link>
                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default Dashboard