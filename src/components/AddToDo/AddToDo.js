import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

const AddToDo = ({ setTodoForm }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTask({...task, title: e.target.value})
    }

    const handleDescription = (e) => {
        setTask({...task, description: e.target.value})
    }

    const closeForm = () => {
        setTodoForm(false)
    }

    const createTask = (e) => {
        e.preventDefault()
        if(task.title && task.description){
            dispatch(addTodo(task))
            setTask({...task, title: '', description: ''})
        }
    }

    return ( 
        <section>
            <div className="container">
                <form onSubmit={createTask} className="form">
                    <input onChange={handleTitle} value={task.title} type="text" className="form__task-title" />
                    <textarea onChange={handleDescription} value={task.description} type="text" className="form__task-description" />
                    <button type="submit">Create</button>
                    <button type="reset"onClick={closeForm}>Cancel</button>
                </form>
            </div>
        </section>
     );
}
 
export default AddToDo;