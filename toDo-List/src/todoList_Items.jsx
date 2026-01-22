import { useDispatch } from "react-redux"
import { deleteTodo,markTodoAsCompleted  } from "./todoSlices"
export default function ToDoListItems({ todo}) {
    const dispatch = useDispatch();
    return (
        <>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Completed!</p>}
            {todo.isCompleted
                ? <button onClick={() => dispatch(deleteTodo(todo.text))}>delete Item</button>
                : <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>Mark as completed</button>}
        </>
    )
}