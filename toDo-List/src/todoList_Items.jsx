import { observer } from "mobx-react-lite";
import { useDispatch } from "react-redux";
import { deleteTodo ,markTodoAsCompleted} from "./todoSlices";
//import { markAsCompleted } from "./todos-mobx.jsx";
//import TodosStore from "./todos-mobx.jsx";

const ToDoListItems = observer(({ todo}) => {
    const dispatch = useDispatch();
    return (
        <>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Completed!</p>}
            {todo.isCompleted
                ? <button onClick={() => dispatch(deleteTodo(todo.id))}>delete Item</button>
                : <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>Mark as completed</button>}
        </>
    );
});

export default ToDoListItems;