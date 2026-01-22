import { useSelector } from "react-redux"
import ToDoListItems from "./todoList_Items"
import NewTODOForm from "./newToDoForm"
import {todos as todosAtom} from "./atom";
import { useRecoilValue } from "recoil";

export default function ToDoList({onCreateToDo}) {
    const todos = useSelector((state) => state.todos.value);
    // const todos = useRecoilValue(todosAtom);
    return (
        <div>
            <h1>To-Do List</h1>
            <NewTODOForm/>
            <h3>Complete List:</h3>
            {
                todos.filter(todo => todo.isCompleted).map((todo, index) => (
                    <ToDoListItems key={index} todo={todo}  />
                ))
            }
            <h3>Incomplete List:</h3>
            {
                todos.filter(todo => !todo.isCompleted).map((todo, index) => (
                    <ToDoListItems key={index} todo={todo} />
                ))
            }
        </div>
    )
}