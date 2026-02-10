import { useSelector } from "react-redux"
import ToDoListItems from "./todoList_Items"
import NewTODOForm from "./newToDoForm"
import { getTodosList, getLoadingTodosStatus, getCompletedTodos, getIncompleteTodos  } from "./selectors"


const TodoList = ()=> {
    const todos = useSelector(getTodosList);
    const todosLoading = useSelector(getLoadingTodosStatus);
    const completedTodos = useSelector(getCompletedTodos);
    const incompleteTodos = useSelector(getIncompleteTodos);
    return  (
        <div>
            <h1>To-Do List</h1>
            <NewTODOForm />
            {todosLoading ? <p>Loading</p>
                : (
                    <>
                        <h3>Complete List:</h3>
                        {
                            completedTodos.map((todo) => (
                                <ToDoListItems key={todo.id} todo={todo} />
                            ))
                        }
                        <h3>Incomplete List:</h3>
                        {
                            incompleteTodos.map((todo) => (
                                <ToDoListItems key={todo.id} todo={todo} />
                            ))
                        }
                    </>
                )}

        </div>

    )
}

export default TodoList;