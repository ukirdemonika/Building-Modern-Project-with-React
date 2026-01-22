import { useSelector } from "react-redux"
import ToDoListItems from "./todoList_Items"
import NewTODOForm from "./newToDoForm"
import {todos as todosAtom} from "./atom";
import { useRecoilValue } from "recoil";

import { observer } from "mobx-react-lite";
import TodosStore from "./todos-mobx.jsx";

const TodoList= observer (( ) => {
    // const todos = useSelector((state) => state.todos.value);
    return (
        <div>
            <h1>To-Do List</h1>
            <NewTODOForm/>
            <h3>Complete List:</h3>
            {
                TodosStore.todos.filter(todo => todo.isCompleted).map((todo, index) => (
                    <ToDoListItems key={index} todo={todo} index={TodosStore.todos.indexOf(todo)} />
                ))
            }
            <h3>Incomplete List:</h3>
            {
                TodosStore.todos.filter(todo => !todo.isCompleted).map((todo, index) => (
                    <ToDoListItems key={index} todo={todo} index={TodosStore.todos.indexOf(todo)} />
                ))
            }
        </div>
    
)
}
)
export default TodoList;