import { createSelector } from "@reduxjs/toolkit";

/**🎐  Selectors are functions that take the state as an argument and return a specific piece of data from the state. 
 * They are used to encapsulate the logic for accessing specific parts of the state, making it easier to manage and maintain the codebase. 
 * In this file, we have two selectors: getTodosList and getLoadingTodosStatus. 
 * The getTodosList selector returns the list of todos from the state, while the getLoadingTodosStatus selector returns a boolean indicating whether the todos are currently 
 * being loaded or not.
 * **/
export const getTodosList = (state) => state.todos.value;
export const getLoadingTodosStatus = (state) => !state.loading.value.completed;

/* ✔🎁==============================================================================================================
=================================================================================================================
The completedTodos selector takes the state as an argument and returns a filtered list of todos that are marked as completed.
 The incompleteTodos selector takes the state as an argument and returns a filtered list of todos that are not marked as completed. 
 =============================================================================================================
 =============================================================================================================
 */
/* export const getCompletedTodos = state =>{
    const todos = getTodosList(state);
    return todos.filter(t =>t.isCompleted);
}

export const getIncompleteTodos = state =>{
    const todos = getTodosList(state);
    return todos.filter(t =>!t.isCompleted);
} */

/*
The createSelector function from the reselect library is used to create memoized selectors.
 It takes one or more input selectors as arguments and a result function that computes the derived data based on the outputs of the input selectors. 
 The createSelector function will only recompute the result if the outputs of the input selectors have changed, which can improve performance by avoiding unnecessary computations.
 */

export const getCompletedTodos = createSelector([getTodosList], (todos) => todos.filter(t => t.isCompleted));
export const getIncompleteTodos = createSelector([getTodosList], (todos) => todos.filter(t => !t.isCompleted));

