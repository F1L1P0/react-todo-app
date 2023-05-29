import { useDispatch } from 'react-redux'
import { addTodo } from '@/redux/todoSlice'
import { useState, useCallback, FormEvent } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import TodoItems from './TodoItems'
import { Link } from 'react-router-dom'
import { ITodo } from '@/redux/todoSlice'
import { ButtonGroup, Button, TextField, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

export default function Todo() {
    const dispatch = useDispatch()

    const [todoName, setTodoName] = useState('')
    const [todoDesc, setTodoDesc] = useState('')
    const [todoTime, setTodoTime] = useState(new Date().toLocaleDateString())

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const newTodo: ITodo = { id: nanoid(), name: todoName, desc: todoDesc, time: todoTime }
            dispatch(addTodo(newTodo))
        },
        [dispatch, todoName, todoDesc, todoTime],
    )

    return (
        <>
            <Box sx={{ background: 'purple', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Link style={{ color: 'white', textAlign: 'center', width: '100%' }} to="/pokemon">
                    GOTO POKEMON PAGE
                </Link>
            </Box>
            <Typography variant="h1" sx={{ fontSize: '4rem', p: 1 }}>
                TODO app
            </Typography>
            <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
                <ButtonGroup variant="outlined" aria-label="Functional TODO buttons">
                    <Grid
                        container
                        spacing={{ xs: 1, sm: 2, md: 3 }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Name"
                                type="text"
                                id="todoName"
                                value={todoName}
                                onChange={(e) => setTodoName(e.target.value)}
                            />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Describtion"
                                type="text"
                                id="todoDesc"
                                value={todoDesc}
                                onChange={(e) => setTodoDesc(e.target.value)}
                            />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="date"
                                id="todoTime"
                                value={todoTime}
                                onChange={(e) => {
                                    setTodoTime(e.target.value)
                                }}
                            />
                        </Grid>
                        <Grid xs>
                            <Button variant="contained" color="primary" type="submit" size="large" fullWidth>
                                CREATE NEW
                            </Button>
                        </Grid>
                    </Grid>
                </ButtonGroup>
            </form>
            <TodoItems />
        </>
    )
}
