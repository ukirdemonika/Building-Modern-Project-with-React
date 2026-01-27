import express from 'express';

const app = express();
 const port = 3000;

 let todos = [];

 app.use(express.json());

 app.get('/todos',(rreq, res)=>{
    res.json();
 })

 app.post('/todos',(req, res)=>{

    const newTodo ={
        id : '123',
        text : 'Sample Todo',
        isCompleted : false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
    })

app.delete('/todos/:id',(req, res)=>{
    const todoId = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== todoId);
    res.status(204).send();
})

app.put('/todos/:id',(req, res)=>{
    const todoId=parseInt(req.params.id);
    const updatedTodo = req.body;

    const todoIndex = todos.findIndex(todo => todo.id === todoId);
     if(todoIndex !== -1){
        return res.status(404).json({message: 'Todo not found'});
     }
     todos[todoIndex] ={...todos[todoIndex], ...updatedTodo};
     res.json(todos[todoIndex]);
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);   
});
    
