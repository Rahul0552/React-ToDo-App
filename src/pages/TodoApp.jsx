// rafc
import { useState } from "react";
// import './src/index.css'; 
import '../index.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // function to Create toDo
  const addTodo = () => {
  if (input.trim()) {
    setTodos([...todos,{id: Date.now(),text: input,done: false}])
    setInput("")
  }
}

  // function to Remove toDo
  const removeTodo = (id) => {
    // to remove item do filter .
    // todos.filter(todo=>todo.id!==id)
    // and it has to send in setTodos()
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  // function to Toggle toDo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo=>todo.id===id?{...todo,done:!todo.done}:todo))
  }
  // function to StartEdit toDo
  const startEdit = (id,text) => {
    setEditId(id)
    setEditText(text)
  }
  // function to SaveEdit toDo
  const saveEdit = (id) => {
    setTodos(todos.map(todo=>todo.id===id?{...todo,text:editText}:todo))
    setEditId(null)
    setEditText("")

  }

  return (
    <div className="Container">
      <div className="CardBody d-flex p-3">
        {/* Default  Start input */}
        <input
          className="form-control border border-success fs-5"
          type="text" 
          placeholder=" What's the Plan for Today?....."
          // Add value attribute & event handlers u can change afterword connection
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {/* Default  end input */}
        {/* addBtn Start  */}
        <button className="btn btn-success mx-3" onClick={() => addTodo()}>
          Add Task
        </button>
        {/* addBtn end  */}
      </div>
      {/* Todo list items start  */}
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo-card" key={todo.id}>
            {/* this is all for editing the text  */}
            {/* editId===todo.id?(1):(2) */}
            {/* 1 () input Start */}
            {editId===todo.id?(
              <input
              className="form-control border border-danger todo-list-text "
              type="text"
              placeholder=" What's the Plan for Today?....."
              // Add value attribute & event handlers u can change afterword connection
              value={editText}
              onChange={(e) => setEditText(e.target.value)}/>
            ):(
              // it is for edition the text 
              // 2 () >>>>  <span>{todo.done?"":""}</span>
              // <span className={todo.done?"text-decoration-line-through text-secondary":"text-dark"} >{todo.text}</span>
              <span className={`todo-text ${todo.done ? "text-decoration-line-through text-info" : "text-light"}`}>
                {todo.text}
              </span>
            )}

            {/* comming to the next button  */}
            {
            // editId===todo.id?(1):(2)
             editId===todo.id?(
              //  {/* save button  */}
             <button className="btn btn-outline-warning todo-buttons mx-2" onClick={()=>saveEdit(todo.id)}>save</button>
            ):(
              <>
              {/* Edit button  */}
              <button className="btn btn-outline-info todo-buttons mx-2" onClick={()=>startEdit(todo.id,todo.text)}>Edit 🖋️</button>
              {/* Undo button  */}
              <button className="btn btn-outline-secondary todo-buttons mx-2 Pending text-center" onClick={()=>toggleTodo(todo.id)}>{todo.done?"Pending":"Completed"}</button>
              </>
             )}
             {/* Delete button  */}
             <button className="btn btn-outline-danger todo-buttons ms-2" onClick={()=>removeTodo(todo.id)}>Delete </button>
          </div>
        ))}
      </div>
      {/* Todo list items end  */}
    </div>
  );
};

export default TodoApp;
