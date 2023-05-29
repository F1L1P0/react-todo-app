import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Pokemon() {
    const apiPokemonUrl = 'https://pokeapi.co/api/v2/pokemon'
    const [pokemon, setPokemon] = useState<{ name: string }[]>([])

    useEffect(() => {
        async function fetchPokemon() {
            const response = await axios.get(apiPokemonUrl)
            setPokemon(response.data.results)
        }
        fetchPokemon()
    }, [])

    return (
        <div>
            <h1>Pokemon</h1>
            <ul>
                {pokemon.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}
