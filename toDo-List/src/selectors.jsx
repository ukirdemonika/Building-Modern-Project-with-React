export const getTodosList = (state) => state.todos.value;
export const getLoadingTodosStatus = (state) => !state.loading.value.completed;