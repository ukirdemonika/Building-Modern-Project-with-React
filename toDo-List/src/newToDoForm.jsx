import { useState } from "react";
import { observer } from "mobx-react-lite";
import TodosStore from "./todos-mobx.jsx";
import { createTodos } from "./thunk.js";
import { useDispatch } from "react-redux";

const NewTODOForm = observer(() => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    return(
        <div>
            <input type="text" placeholder="Enter new to-do item here" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => {
                dispatch(createTodos(inputValue));
                setInputValue("");
            }}>Add To-Do</button>
        </div>
    );
});

export default NewTODOForm;