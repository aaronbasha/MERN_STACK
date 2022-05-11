import React from 'react'

const DisplayPokemon = props => {
    const {pokemon} = props
return (
    <div>
        <div>
            {pokemon.map((pokemon, key)=>{
            return (<li key={key}>{pokemon.name}</li>)
            })}
            </div>  
    </div>
)
}

export default DisplayPokemon