/** 
This file contains the todoSlices which is responsible for handling the state of the todo list.
 It contains the reducers to create a new todo item, mark a todo item as completed, delete a todo item, and update the entire list of todos.
  It also contains an extra reducer to handle the loading completed action from the loadingSlice.
  **/
import { createSlice } from "@reduxjs/toolkit";
import { loadingCompleted } from "./loadingSlice";

const todoSlices = createSlice({
    name: 'todos',
    initialState: {
        value: []

    },
    reducers: {
        //Reducer to create a new todo item
        createTodo: (state, action) => {
            state.value = [...state.value,
            {
                text: action.payload,
                isCompleted: false,
                id: Date.now().toString()
            }
            ]
        },
        //Reducer to mark a todo item as completed
        markTodoAsCompleted: (state, action) => {
            const text = action.payload;
            const todo = state.value.find(todo => todo.id === text);
            if (todo) {
                todo.isCompleted = true;
            }
        },
        //Reducer to delete a todo item
        deleteTodo: (state, action) => {
            const text = action.payload;
            state.value = state.value.filter(todo => todo.id !== text);
        },
        //Reducer to update the entire list of todos
        updatedTodos: (state, action) => {
            state.value = action.payload;
        }
    },
    //extra reducer to handle loading completed action
    extraReducers: (builder) => {
        builder.addCase(loadingCompleted, (state, action) => {
            state.value = action.payload;
        })
    }
});
export const { createTodo, markTodoAsCompleted, deleteTodo, updatedTodos } = todoSlices.actions;
export default todoSlices.reducer;