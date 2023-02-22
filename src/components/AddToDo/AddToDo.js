import { useState } from "react";

const AddToDo = ({ todo, setTodo, setTodoForm }) => {
    const [task, setTask] = useState({id: Date.now(), time: new Date().toLocaleString(), todoStatus: false})

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
        setTodo([...todo, task])
        localStorage.setItem('localTasks', JSON.stringify([...todo, task]))
        setTask({...task, title: '', description: ''})
        setTodoForm(false)
    }

    return ( 
        <section>
            <div className="container">
                <form onSubmit={createTask} className="form">
                    <input onChange={handleTitle} value={task.title} type="text" className="form__task-title" />
                    <textarea onChange={handleDescription} value={task.description} type="text" className="form__task-description" />
                    <button type="submit">Create</button>
                    <button type="reset" onClick={closeForm}>Cancel</button>
                </form>
            </div>
        </section>
     );
}
 
export default AddToDo;