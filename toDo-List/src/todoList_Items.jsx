import { observer } from "mobx-react-lite";
import TodosStore from "./todos-mobx.jsx";

const ToDoListItems = observer(({ todo, index }) => {
    return (
        <>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Completed!</p>}
            {todo.isCompleted
                ? <button onClick={() => TodosStore.deleteTodo(index)}>delete Item</button>
                : <button onClick={() => TodosStore.markAsCompleted(index)}>Mark as completed</button>}
        </>
    );
});

export default ToDoListItems;