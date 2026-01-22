import { createSlice } from "@reduxjs/toolkit";

const todoSlices = createSlice({
    name:'todos',
    initialState:{
        value:[
            {
                text:'initial todo item',
                isCompleted:false
            },
            {
                text:'new todo item',
                isCompleted:false
            }
        ]
    },
    reducers:{
        createTodo: (state, action)=>{
            state.value=[...state.value,
                {
                    text:action.payload,
                    isCompleted:false
                }
            ]
        },
        markTodoAsCompleted: (state, action)=>{
            const text=action.payload;
            const todo=state.value.find(todo => todo.text === text);
            if(todo){
                todo.isCompleted=true;
            }
        },
        deleteTodo: (state, action)=>{
            const text=action.payload;
            state.value=state.value.filter(todo => todo.text !== text);
        }
    }
});
export const{createTodo, markTodoAsCompleted, deleteTodo} = todoSlices.actions;
export default todoSlices.reducer;