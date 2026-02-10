import { useSelector } from "react-redux"
import ToDoListItems from "./todoList_Items"
import NewTODOForm from "./newToDoForm"
import { getTodosList, getLoadingTodosStatus } from "./selectors"
import { observer } from "mobx-react-lite"

/* observer is a higher-order component that allows us to create reactive components that automatically re-render when the observable data they depend on changes.
It is used in conjunction with MobX to create components that can react to changes in the state of the application without needing to manually manage subscriptions or updates. */
const TodoList = observer(() => {
    const todos = useSelector(getTodosList);
    const todosLoading = useSelector(getLoadingTodosStatus);
    return (
        <div>
            <h1>To-Do List</h1>
            <NewTODOForm />
            {todosLoading ? <p>Loading</p>
                : (
                    <>
                        <h3>Complete List:</h3>
                        {
                            todos.map((todo) => (
                                <ToDoListItems key={todo.id} todo={todo} />
                            ))
                        }
                        <h3>Incomplete List:</h3>
                        {
                            todos.map((todo) => (
                                <ToDoListItems key={todo.id} todo={todo} />
                            ))
                        }
                    </>
                )}

        </div>

    )
}
)
export default TodoList;