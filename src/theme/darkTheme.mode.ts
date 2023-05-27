import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#222',
        },
        text: {
            primary: '#fff',
        },
    },
})