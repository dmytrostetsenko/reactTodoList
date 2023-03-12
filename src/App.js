import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import Footer from "./components/Footer/Footer";
import { useState} from "react";
import './styles/style.css'

function App() {
  const [todo, setTodo] = useState([])

  return (
    <div className="wrapper">
        <Header />
        <main className="main">
          <ToDoList todo={todo} setTodo={setTodo} />
        </main>
        <Footer />
    </div>
  );
}

export default App;
