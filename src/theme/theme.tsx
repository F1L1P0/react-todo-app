import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { lightTheme } from '@/theme/lightTheme.mode'
import { darkTheme } from '@/theme/darkTheme.mode'

export const light = lightTheme
export const dark = darkTheme

export const ThemeSwitchContext = createContext<{
    toggleColorMode?: () => void
}>({})

export const ThemeSettingProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<'light' | 'dark'>(() => {
        const storedMode = localStorage.getItem('mode')
        return storedMode ? (storedMode as 'light' | 'dark') : 'light'
    })

    const theme = useMemo(() => {
        return mode === 'light' ? light : dark
    }, [mode])

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        localStorage.setItem('mode', mode)
    }, [mode])

    return (
        <ThemeProvider theme={theme}>
            <ThemeSwitchContext.Provider value={{ toggleColorMode }}>{children}</ThemeSwitchContext.Provider>
        </ThemeProvider>
    )
}
