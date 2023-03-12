import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../store/todoSlice";

const UpdateTodo = ( {item, setActive} ) => {
    const [task, setTask] = useState({...item})

    const dispatch = useDispatch();
    const handleTitle = (e) => {
        setTask({...task, title: e.target.value})
    }

    const handleDescription = (e) => {
        setTask({...task, description: e.target.value})
    }

    const closeForm = () => {
        setActive(false)
    }

    const updTask = (e) => {
        e.preventDefault()
        if(task.title && task.description){
            dispatch(updateTodo(task))
            setActive(false)
        }
    }
    
    return ( 
        <form className="form" onSubmit={updTask}>
            <input type="text" className="form__task-title" onChange={handleTitle} value={task.title} />
            <textarea rows='7' type="text" className="form__task-description" onChange={handleDescription} value={task.description} />
            <div className="form__buttons">
                <button className="button form__button" type="submit">Update</button>
                <button className="button form__button" onClick={closeForm}>Cancel</button>
            </div>
        </form>
     );
}
 
export default UpdateTodo;