import { makeAutoObservable } from "mobx";
class TodosStore{
    todos=[];
    constructor(){
        makeAutoObservable(this)
    }
    createTodo(text){
        this.todos.push({text,isCompleted:false})
    }
    markAsCompleted(index){
        this.todos[index].isCompleted=true
    }
    deleteTodo(index){
        this.todos.splice(index,1)
    }   
}
export default new TodosStore();
    