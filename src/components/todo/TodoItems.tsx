import { removeTodo, updateTodo } from '@/redux/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useState } from 'react'
import { ITodo } from '@/redux/todoSlice'
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
        selectedTodoId: null,
    })

    const handleEditClick = (id) => {
        if (todoState.selectedTodoId === id) {
            setTodoState({ ...todoState, showUpdateTodo: false, selectedTodoId: null })
        } else {
            const selectedTodo = todos.find((todo: ITodo) => todo.id === id)
            setTodoState({
                ...todoState,
                selectedTodoId: id,
                updatedTodoName: selectedTodo.name,
                updatedTodoDesc: selectedTodo.desc,
                updatedTodoTime: selectedTodo.time,
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
            selectedTodoId: null,
        })
    }

    const todoItemStyle = {
        border: '1px solid red',
        padding: '1rem',
        margin: '1rem',
        borderRadius: '1rem',
    }

    return (
        <>
            {todos.map((item) => (
                <Box key={item.id} style={todoItemStyle}>
                    <Box>
                        <p>name: {item.name}</p>
                        <p>describtion: {item.desc}</p>
                        <p>date: {item.time}</p>
                        <ButtonGroup
                            variant="outlined"
                            aria-label="Functional TODO buttons"
                            style={{ paddingBottom: '1rem' }}
                        >
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
