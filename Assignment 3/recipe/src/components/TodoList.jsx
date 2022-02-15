import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);
    
    
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(todo, ...todos);
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo =>todo.id !== id);
        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodo = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodo);
    }

  return <div>
      {/* <h1 className='main'>Todo List</h1> */}

      {/* <h3>Add Todo</h3>
      <Link to="/blogs">
            {" "}
            <button className="btn btn-success ">Add</button>
          </Link> */}
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
  </div>;
}

export default TodoList;
