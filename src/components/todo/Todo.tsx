import { useDispatch } from 'react-redux'
import { addTodo } from '@/redux/todoSlice'
import { useState, useCallback, FormEvent } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import TodoItems from './TodoItems'

export default function Todo() {
    const dispatch = useDispatch()

    const [todoName, setTodoName] = useState('')
    const [todoDesc, setTodoDesc] = useState('')
    const [todoTime, setTodoTime] = useState(new Date().toLocaleDateString())

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault()
            const newTodo = { id: nanoid(), name: todoName, desc: todoDesc, time: todoTime }
            dispatch(addTodo(newTodo))
        },
        [dispatch, todoName, todoDesc, todoTime],
    )

    return (
        <div className="container">
            <h1>TODO app</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="todoName" onChange={(e) => setTodoName(e.target.value)} />
                <input type="text" id="todoDesc" onChange={(e) => setTodoDesc(e.target.value)} />
                <input type="date" id="todoDate" onChange={(e) => setTodoTime(e.target.value)} />
                <button type="submit">SAVE NEW</button>
            </form>
            <TodoItems />
        </div>
    )
}
