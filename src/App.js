import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import Footer from "./components/Footer/Footer";
import AddToDo from "./components/AddToDo/AddToDo";
import { useState, useEffect } from "react";

function App() {
  const [todoForm, setTodoForm] = useState(false)
  const [todo, setTodo] = useState([])

  useEffect(() => {
    if (localStorage.getItem('localTasks')){
      const store = JSON.parse(localStorage.getItem('localTasks'));
      setTodo(store)
    }
  },[])

  const toggleTodo = () =>{
    setTodoForm(true)
  }

  return (
    <>
        <Header />
        <main>
          <button onClick={toggleTodo}>Create new task</button>
          {todoForm && <AddToDo todo={todo} setTodo={setTodo} setTodoForm={setTodoForm} />}
          <ToDoList todo={todo} setTodo={setTodo} />
        </main>
        <Footer />
    </>
  );
}

export default App;
