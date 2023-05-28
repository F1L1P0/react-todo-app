import { removeTodo, updateTodo } from '@/redux/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useState } from 'react'

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
            const selectedTodo = todos.find((todo) => todo.id === id)
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
            updatedTodoTime: Date.now(),
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
                <div key={item.id} style={todoItemStyle}>
                    <div>
                        <p>name: {item.name}</p>
                        <p>describtion: {item.desc}</p>
                        <p>date: {item.time}</p>
                        <button type="button" onClick={() => dispatch(removeTodo(item.id))}>
                            Remove
                        </button>
                        <button type="button" onClick={() => handleEditClick(item.id)}>
                            Edit todo
                        </button>
                        {todoState.showUpdateTodo && todoState.selectedTodoId === item.id && (
                            <div className="editTodo">
                                <input
                                    type="text"
                                    placeholder="change name"
                                    value={todoState.updatedTodoName}
                                    onChange={(e) => setTodoState({ ...todoState, updatedTodoName: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="change description"
                                    value={todoState.updatedTodoDesc}
                                    onChange={(e) => setTodoState({ ...todoState, updatedTodoDesc: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="change time"
                                    value={todoState.updatedTodoTime}
                                    onChange={(e) => setTodoState({ ...todoState, updatedTodoTime: e.target.value })}
                                />
                                <button type="button" onClick={handleUpdateTodo}>
                                    Update
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}
