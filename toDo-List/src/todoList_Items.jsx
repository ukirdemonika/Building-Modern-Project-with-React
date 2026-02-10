import { observer } from "mobx-react-lite";
import { useDispatch } from "react-redux";
import { deleteTodos, markTodoAsCompleted } from "./thunk";
//import { markAsCompleted } from "./todos-mobx.jsx";
//import TodosStore from "./todos-mobx.jsx";

export default function ToDoListItems ({todo}) {
    const dispatch = useDispatch();
    return (
        <>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Completed!</p>}
            {todo.isCompleted
                ? <button onClick={() => { console.log('Delete clicked for id:', todo.id); dispatch(deleteTodos(todo.id)); }}>delete Item</button>
                : <button onClick={() => { console.log('Mark completed clicked for id:', todo.id); dispatch(markTodoAsCompleted(todo.id)); }}>Mark as completed</button>}
        </>
    );
};

