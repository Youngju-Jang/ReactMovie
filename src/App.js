import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currenetArray) => [toDo, ...currenetArray]);
    setTodo("");
  };
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do.." />
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
