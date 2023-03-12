import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import './add-todo.css'

const AddToDo = ({ setActive }) => {
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
        setTask({...task, title: '', description: ''})
        setActive(false)
    }

    const createTask = (e) => {
        e.preventDefault()
        if(task.title && task.description){
            dispatch(addTodo(task))
            setTask({...task, title: '', description: ''})
            setActive(false)
        }
    }

    return ( 
        <form className="form" onSubmit={createTask}>
            <input type="text" className="form__task-title" placeholder="Task name" onChange={handleTitle} value={task.title} />
            <textarea rows='7' type="text" className="form__task-description" placeholder="Task description" onChange={handleDescription} value={task.description} />
            <div className="form__buttons">
                <button className="button form__button" type="submit">Create</button>
                <button className="button form__button" type="reset" onClick={closeForm}>Cancel</button>
            </div>
        </form>
     );
}
 
export default AddToDo;