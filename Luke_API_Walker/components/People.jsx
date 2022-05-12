
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const People = () => {
    const { id } = useParams()
    const [apiState, setAPIState] = useState()
    const [err, setErr] = useState(null)


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(successResponse => {
                console.log("success" + successResponse.data)
                setAPIState(successResponse.data)
                setErr(null)
            })
            .catch(err => {
                setAPIState("")
                setErr("these are not the droids you are looking for")
            })

    }, [id])

    const showPeople = () => {
        return (
            <div>

                {
                    apiState ?
                        <div>
                            <h1>{apiState.name}</h1>
                            <h2>  <strong>  Height:  </strong>{apiState.height}</h2>
                            <h2>  <strong>  Mass:  </strong>{apiState.mass}</h2>
                            <h2>  <strong>  Skin Color:  </strong>{apiState.skin_color}</h2>
                            <h2>  <strong>  Hair Color:  </strong>{apiState.hair_color}</h2>
                        </div>
                        : <h1> Loading...</h1>
                }
            </div>
        )
    }
    const showError = () => {
        return (
            <div>
                <p>{err}</p>
            </div>
        )
    }

    return (
        <div>
            {
                err ?
                    showError() : showPeople()
            }
        </div>
    )
}

export default People