import { useState } from "react";
import { createTodo } from "./todoSlices";
import { useDispatch } from "react-redux";
export default function NewTODOForm() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    return(
        <div>
            <input type="text" placeholder="Enter new to-do item here" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => {
                dispatch(createTodo(inputValue))
                setInputValue("")
            }}>Add To-Do</button>
        </div>
    )
}