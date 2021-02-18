import React from 'react'

const Todo = ({ todo, deleteTodo}) => {
  return (
    <div className="todo-row ">
       {todo.id}: {todo.username}—{todo.task}
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipn3XFHag8MW1OTCnVkjwx_bADdrBc6rGbA&usqp=CAU" width="25px"/>
      </button>
    </div>
  )
}

export default Todo;
