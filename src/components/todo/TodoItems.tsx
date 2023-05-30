import { removeTodo, updateTodo } from '@/redux/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useState } from 'react'
import { ITodo } from './todo.interface'
import { ButtonGroup, Button, TextField, Box } from '@mui/material'
import Stack from '@mui/material/Stack'

export default function TodoItem() {
    const dispatch = useDispatch()
    const todos = useSelector((state: RootState) => state.todo.todos)

    const [todoState, setTodoState] = useState({
        updatedTodoName: '',
        updatedTodoDesc: '',
        updatedTodoTime: new Date().toLocaleDateString(),
        showUpdateTodo: false,
        selectedTodoId: '',
    })

    const handleEditClick = (id: string | number) => {
        if (todoState.selectedTodoId === id) {
            setTodoState({ ...todoState, showUpdateTodo: false, selectedTodoId: '' })
        } else {
            const selectedTodo = todos.find((todo: ITodo) => todo.id === id)
            setTodoState({
                ...todoState,
                selectedTodoId: id,
                updatedTodoName: selectedTodo?.name ?? '',
                updatedTodoDesc: selectedTodo?.desc ?? '',
                updatedTodoTime: selectedTodo?.time ?? new Date().toLocaleDateString(),
                showUpdateTodo: true,
            })
        }
    }

    const handleUpdateTodo = () => {
        dispatch(
            updateTodo({
                id: todoState.selectedTodoId,
                name: todoState.updatedTodoName,
                desc: todoState.updatedTodoDesc,
                time: todoState.updatedTodoTime,
            }),
        )

        setTodoState({
            ...todoState,
            updatedTodoName: '',
            updatedTodoDesc: '',
            updatedTodoTime: new Date().toLocaleTimeString(),
            showUpdateTodo: false,
            selectedTodoId: '',
        })
    }

    return (
        <>
            {todos.map((item) => (
                <Box
                    key={item.id}
                    sx={{ border: '1px solid #1565c0', p: 2, mt: 2, borderRadius: '1rem', width: '100%' }}
                >
                    <Box>
                        <p>name: {item.name}</p>
                        <p>describtion: {item.desc}</p>
                        <p>date: {item.time}</p>
                        <ButtonGroup variant="outlined" aria-label="Functional TODO buttons" sx={{ pb: 3 }}>
                            <Button type="button" onClick={() => dispatch(removeTodo(item.id))}>
                                Remove
                            </Button>
                            <Button type="button" onClick={() => handleEditClick(item.id)}>
                                Edit todo
                            </Button>
                        </ButtonGroup>
                        {todoState.showUpdateTodo && todoState.selectedTodoId === item.id && (
                            <Stack direction={{ md: 'row', sm: 'column' }} spacing={{ xs: 1, md: 3 }}>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="change name"
                                    value={todoState.updatedTodoName}
                                    onChange={(e) => setTodoState({ ...todoState, updatedTodoName: e.target.value })}
                                />
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="change description"
                                    value={todoState.updatedTodoDesc}
                                    onChange={(e) => setTodoState({ ...todoState, updatedTodoDesc: e.target.value })}
                                />
                                <TextField
                                    variant="outlined"
                                    type="date"
                                    label="change time"
                                    value={todoState.updatedTodoTime}
                                    onChange={(e) => setTodoState({ ...todoState, updatedTodoTime: e.target.value })}
                                />
                                <Button type="button" variant="outlined" size="large" onClick={handleUpdateTodo}>
                                    Update
                                </Button>
                            </Stack>
                        )}
                    </Box>
                </Box>
            ))}
        </>
    )
}
