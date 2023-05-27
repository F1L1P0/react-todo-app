import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
    id: number | string
    name: string
    desc: string
    time: number | string
}

interface TodoState {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: [
        {
            id: 0,
            name: 'name of first placeholder',
            desc: 'desc1',
            time: Math.floor(Date.now() / 1000),
        },
        {
            id: 1,
            name: 'name of second palceholder',
            desc: 'desc2',
            time: Math.floor(Date.now() / 1000),
        },
        {
            id: 2,
            name: 'name of third placeholder',
            desc: 'desc3',
            time: Math.floor(Date.now() / 1000),
        },
    ],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            const newTodo = {
                id: action.payload.id,
                name: action.payload.name,
                desc: action.payload.desc,
                time: action.payload.time,
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            const todoId = action.payload
            state.todos = state.todos.filter((todo) => todo.id !== todoId)
        },
    },
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
