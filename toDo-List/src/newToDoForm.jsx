import { useState } from "react";
import { observer } from "mobx-react-lite";
import TodosStore from "./todos-mobx.jsx";

const NewTODOForm = observer(() => {
    const [inputValue, setInputValue] = useState("");
    return(
        <div>
            <input type="text" placeholder="Enter new to-do item here" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => {
                TodosStore.createTodo(inputValue);
                setInputValue("");
            }}>Add To-Do</button>
        </div>
    );
});

export default NewTODOForm;