//Handling side effects and calling api from backend to fetch data

import axios from 'axios';
import { loadingStarted, loadingCompleted, loadingFailed } from './loadingSlice';
export const loadTodos = () => async (dispatch) => {
    dispatch(loadingStarted());
    try {
        const response = await axios.get('/api/todos');
        const todos = response.data;
        console.log(todos);
        dispatch(loadingCompleted(todos));
    } catch (error) {
        console.error('Failed to load todos:', error);
        dispatch(loadingFailed(error.message));
    }
};
