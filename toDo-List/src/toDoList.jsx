import { useSelector } from "react-redux"
import ToDoListItems from "./todoList_Items"
import NewTODOForm from "./newToDoForm"

import { observer } from "mobx-react-lite";
import TodosStore from "./todos-mobx.jsx";

const TodoList = observer(() => {
    const todos = useSelector((state) => state.todos.value);
    const todosLoading = useSelector((state) => !state.loading.value.completed);
    return (
        <div>
            <h1>To-Do List</h1>
            <NewTODOForm />
            {todosLoading ? <p>Loading</p>
                : (
                    <>
                        <h3>Complete List:</h3>
                        {
                            todos.map((todo, index) => (
                                <ToDoListItems key={index} todo={todo} />
                            ))
                        }
                        <h3>Incomplete List:</h3>
                        {
                            todos.map((todo, index) => (
                                <ToDoListItems key={index} todo={todo}  />
                            ))
                        }
                    </>
                )}

        </div>

    )
}
)
export default TodoList;