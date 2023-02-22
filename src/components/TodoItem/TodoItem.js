import { useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../../store/todoSlice";
import './todo-item.css'

const TodoItem = ({item}) => {
    const dispatch = useDispatch()

    const changeStatus = (id) => {
        dispatch(completeTodo(id))
    }
    const removeTask = (id) => {
        dispatch(removeTodo(id))
    }
    return ( 
        <li className={ item.todoStatus ? 'todo-list__item item--done': 'todo-list__item item'} key={item.id}>
            <button onClick={() => changeStatus(item.id)}>done</button>
            <h2 className="item__title">{item.title}</h2>
            <p className="item__description">{item.description}</p>
            <span>{item.time}</span>
        <button onClick={() => removeTask(item.id)}>delete</button>
    </li>
     );
}
 
export default TodoItem;