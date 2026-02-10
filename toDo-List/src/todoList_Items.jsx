import { observer } from "mobx-react-lite";
import { useDispatch } from "react-redux";
import { deleteTodos, markTodoAsCompleted } from "./thunk";
import styled from "styled-components"


const CartContainer = styled.div`
${props => props.important && `background-color: yellow;`}
${props => props.completedStyle ? `background-color: lightgreen;` : `background-color: #f9f9f9;`}
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    padding: 20px;
`;
const Buttons =styled.button`
    margin-top: 10px;
    padding: 10px 20px; 
    background-color: #007BFF;
    color: white;`;

export default function ToDoListItems ({todo}) {
    const dispatch = useDispatch();
    return (
        <CartContainer important={todo.text.endsWith('!')} completedStyle={todo.isCompleted}> 
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Completed!</p>}
            {todo.isCompleted
                ? <Buttons onClick={() => { console.log('Delete clicked for id:', todo.id); dispatch(deleteTodos(todo.id)); }}>delete Item</Buttons>
                : <Buttons onClick={() => { console.log('Mark completed clicked for id:', todo.id); dispatch(markTodoAsCompleted(todo.id)); }}>Mark as completed</Buttons>}
        </CartContainer>
    );
};

