import React, {useState} from 'react'
import Todo from './Todo'

const TodoList = ({todoProps, deleteTodo}) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(1);
  const [sortKey, setSortKey] = useState("username");

  return (
    <div>
      <input
      type="text"
      className="todo-input search"
      placeholder="Search"
      value={search}
      onChange = {(e)=>setSearch(e.target.value)}
      />

      <select
      className="select-todo"
      value={sort}
      onChange = {(e)=>setSort(e.target.value)}
      >
        <option>Sort By</option>
        <option value="1">A-Z</option>
        <option value="-1">Z-A</option>
      </select>

    {todoProps
    // filtering by search key
    .filter((val)=>{
      let searchLC = search.toLowerCase();
      let usernameLC = val.username.toLowerCase();
      let taskLC = val.task.toLowerCase();
      if (usernameLC.includes(searchLC) || taskLC.includes(searchLC)) {
        return true;
      }
      return false;
        {
      }
    }) 
    //sorting A-Z & Z-A
    .sort((a, b) => {
      if (sortKey === "id") {
        return (a.id - b.id) * sort;
      }
      if (a[sortKey].toLowerCase() < b[sortKey].toLowerCase()) {
        return -1 * sort;
      }
      if (a[sortKey].toLowerCase() > b[sortKey].toLowerCase()) {
        return 1 * sort;
      }
      return 0;
    })
    .map((t, idx)=> {
      return <Todo deleteTodo={deleteTodo}  todo={t} key = {idx} />;
    })}
    </div>
  )
}
export default TodoList
