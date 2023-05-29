import { Link } from 'react-router-dom'
import Pokemon from '@/components/pokemon/Pokemon'

export const PokemonPage = () => {
    return (
        <>
            <Link to="/">Back to dashboard</Link>
            <Pokemon />
        </>
    )
}
