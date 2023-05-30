import { Suspense, useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Typography, Button } from '@mui/material'
import { useRef } from 'react'

export default function Pokemon() {
    const [pokemon, setPokemon] = useState<{ name: string }[]>([])
    const apiPokemonNamesUrl = `https://pokeapi.co/api/v2/pokemon`
    const [nextUrl, setNextUrl] = useState(apiPokemonNamesUrl)
    const isMounted = useRef(false)

    async function fetchPokemon() {
        const response = await axios.get(nextUrl)
        const pokemonNames = response.data.results
        setPokemon((prevPokemon) => [...prevPokemon, ...pokemonNames])
        setNextUrl(response.data.next)
    }

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true //prevent double fetching
            fetchPokemon()
        }
    }, [])

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="h1">Pokemons</Typography>
            <Typography variant="h3">Here is list of pokemons from api</Typography>
            <Button variant="contained" onClick={() => fetchPokemon()}>
                Load more pokemon
            </Button>
            <Suspense fallback={<p>Loading...</p>}>
                <ul>
                    {pokemon.map((pokemon) => (
                        <li style={{ listStyle: 'numeric' }} key={pokemon.name}>
                            {'-->'} {pokemon.name}
                        </li>
                    ))}
                </ul>
            </Suspense>
        </Box>
    )
}
