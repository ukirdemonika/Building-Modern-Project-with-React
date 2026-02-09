import { createSlice } from "@reduxjs/toolkit";
import { loadingCompleted } from "./loadingSlice";

const todoSlices = createSlice({
    name:'todos',
    initialState:{
        value:[]
       
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
            state.value=state.value.filter(todo => todo.id !== text);
        },
        updatedTodos: (state, action)=>{
            state.value = action.payload;
        }
    },
    //extra reducer to handle loading completed action
    extraReducers: (builder) => {
        builder.addCase(loadingCompleted, (state, action) =>{
            state.value = action.payload;
        })
    }
});
export const{createTodo, markTodoAsCompleted, deleteTodo, updatedTodos} = todoSlices.actions;
export default todoSlices.reducer;