import React, {useState} from 'react'
import TodoList from './TodoList';

const TodoForm = (props) => {
const [username, setUsername] = useState("");
const [task, setTask] = useState("");
const [todos, setTodos] = useState([]);
const [id, setId] = useState(1);

function deleteTodo(toDelete) {
  let newArr = todos.filter((val) => val.id !== toDelete);
  setTodos(newArr);
}

  return (
    <>
      <div className="form">
        <input
        type="text"
        value={username}
        className="todo-input"
        placeholder="Username"
        onChange = {(e)=> setUsername(e.target.value)}
        />
        <input
        type="text"
        className="todo-input"
        placeholder="Task"
        value={task}
        onChange = {(e)=> setTask(e.target.value)}
        />
        <button
        className="todo-button"
        onClick = {()=> {
          let newTodo = {id, username, task};
          setTodos([...todos, newTodo]); 
          setId(id+1)
          setUsername("");
          setTask("");
        }}
        >

        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/docomo/205/heavy-plus-sign_2795.png" height="25px"
        width="25px"/>
        </button>
      </div>
      <TodoList deleteTodo={deleteTodo} todoProps={todos}/>
    </>
  )
}

export default TodoForm;
