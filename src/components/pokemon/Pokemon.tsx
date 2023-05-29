import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Typography } from '@mui/material'

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
        <Box>
            <Typography variant="h1">Pokemon</Typography>
            <ul>
                {pokemon.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </Box>
    )
}
