import { removeTodo } from '@/redux/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function TodoItem() {
    const dispatch = useDispatch()
    const todos = useSelector((state: RootState) => state.todo.todos)

    return (
        <>
            {todos.map((item) => (
                <div
                    key={item.id}
                    style={{
                        border: '1px solid red',
                        padding: '1rem',
                        margin: '1rem',
                        borderRadius: '1rem',
                    }}
                >
                    <div>
                        <p>name: {item.name}</p>
                        <p>describtion: {item.desc}</p>
                        <p>date: {item.time}</p>
                        <button type="button" onClick={() => dispatch(removeTodo(item.id))}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
