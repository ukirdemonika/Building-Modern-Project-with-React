//Handling side effects and calling api from backend to fetch data

import axios from 'axios';
import { loadingStarted, loadingCompleted, loadingFailed } from './loadingSlice';
import { get } from 'mobx';
import { updatedTodos,deleteTodo } from './todoSlices';
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
        await axios.delete('http://localhost:3000/api/todos/' + todoId);
        const updatedList= getState().todos.value.filter(t =>t.id !== todoId)
        dispatch(updatedTodos(updatedList));
    }catch(e){
        console.log(e);
    }
}
