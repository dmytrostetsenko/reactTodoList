
import './todo-list.css'

const ToDoList = ({ todo, setTodo }) => {

    const deleteItem = (id) => {
        const removeObj = [...todo].filter(item => item.id !== id) 
        setTodo(removeObj);
        localStorage.setItem('localTasks', JSON.stringify(removeObj))
    }

    const changeStatus = (id) => {
        const done = [...todo].filter((item) => {
            if(item.id === id){
                item.todoStatus = !item.todoStatus;
            }
            return item
        })
        setTodo(done);
        localStorage.setItem('localTasks', JSON.stringify(done))
    }

    return ( 
        <section className="section">
            <div className="container">
                <ul className="todo-list">
                    {todo.map((item) => (
                            <li className={item.todoStatus ? 'todo-list__item item--done': 'todo-list__item item'} key={item.id}>
                                <button onClick={() => changeStatus(item.id)}>done</button>
                                <h2 className="item__title">{item.title}</h2>
                                <p className="item__description">{item.description}</p>
                                <span>{item.time}</span>
                                <button onClick={ () => deleteItem(item.id)}>delete</button>
                            </li>
                    ))}
                </ul>
            </div>
        </section>
     );
}
 
export default ToDoList;