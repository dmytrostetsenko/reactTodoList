import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import Footer from "./components/Footer/Footer";
import AddToDo from "./components/AddToDo/AddToDo";
import { useState} from "react";

function App() {
  const [todoForm, setTodoForm] = useState(false)
  const [todo, setTodo] = useState([])

  const toggleTodo = () =>{
    setTodoForm(true)
  }

  return (
    <>
        <Header />
        <main>
          <button onClick={toggleTodo}>Create new task</button>
          {todoForm && <AddToDo setTodoForm={setTodoForm} />}
          <ToDoList todo={todo} setTodo={setTodo} />
        </main>
        <Footer />
    </>
  );
}

export default App;
