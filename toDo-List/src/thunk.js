//Handling side effects and calling api from backend to fetch data
//Thunk is a middleware that allows us to write action creators that return a function instead of an action. This function can be used to perform asynchronous operations, such as fetching data from an API, and then dispatching actions based on the results of those operations.

import axios from 'axios';
import { loadingStarted, loadingCompleted, loadingFailed } from './loadingSlice';
import { updatedTodos } from './todoSlices';
export const loadTodos = () => async (dispatch) => {
    dispatch(loadingStarted());
    try {
        const response = await axios.get('http://localhost:3000/api/todos');
        const todos = response.data;
        console.log(todos);
        dispatch(loadingCompleted(todos));
    } catch (error) {
        console.error('Failed to load todos:', error);
        dispatch(loadingFailed(error.message));
    }
};

export const createTodos = (newTodosText) => async (dispatch, getState) => {
    try{
        const response =await axios.post('http://localhost:3000/api/todos', {text: newTodosText})
        const newTOdos = response.data;

        // Update the Redux store with the new todo item
        //getstate to access store state

        const updatedList = [...getState().todos.value, newTOdos];
        dispatch(updatedTodos(updatedList));

    }catch(e){
        console.log(e)
    }
}

export const deleteTodos = (todoId)=> async (dispatch, getState)=>{
    try{
        console.log('deleteTodos called with id:', todoId);
        await axios.delete('http://localhost:3000/api/todos/' + todoId);
        const current = getState().todos.value || [];
        const updatedList= current.filter(t => t.id !== todoId);
        console.log('deleteTodos updatedList length:', updatedList.length, 'current length:', current.length);
        dispatch(updatedTodos(updatedList));
    }catch(e){
        console.log(e);
    }
}
export const markTodoAsCompleted = (todoId) => async (dispatch, getState)=>{
    try{
        console.log('markTodoAsCompleted called with id:', todoId);
        const response=await axios.put('http://localhost:3000/api/todos/' + todoId, {isCompleted: true});
        const updatedTodo = response.data;
        const current = getState().todos.value || [];
        const updatedList = current.map(t => (t.id == todoId ? updatedTodo : t));
        console.log('markTodoAsCompleted updatedList length:', updatedList.length);
        dispatch(updatedTodos(updatedList));
    }catch(e){
        console.log(e);
    }
}
