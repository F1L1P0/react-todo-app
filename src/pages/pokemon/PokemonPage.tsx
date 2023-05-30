import { Link } from 'react-router-dom'
import Pokemon from '@/components/pokemon/Pokemon'
import { Box } from '@mui/material'

export const PokemonPage = () => {
    return (
        <>
            <Box sx={{ background: 'purple', width: '100%', display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Link style={{ color: 'white', textAlign: 'center', width: '100%' }} to="/">
                    GO TO DASHBOARD
                </Link>
            </Box>
            <Pokemon />
        </>
    )
}
