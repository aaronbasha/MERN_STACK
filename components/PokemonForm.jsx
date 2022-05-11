import React, { useState } from "react";
import axios from "axios";
import DisplayPokemon from "./DisplayPokemon";

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807%22")
        .then((response) => {
            setPokemon(response.data.results);

        })
        .catch((err) => {
            console.log(err);
        })
    }
return (
    <div>
        <button onClick={getPokemon}>Fetch Names</button>
        <DisplayPokemon pokemon={pokemon}/>
    </div>
)
}

export default FetchPokemon;