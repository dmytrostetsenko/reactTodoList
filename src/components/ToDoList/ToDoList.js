import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'

const ToDoList = () => {
    const todoList = useSelector(state => state.todoes.todoList)

    return ( 
        <section className="section">
            <div className="container">
                <ul className="todo-list">
                    {todoList.map((item) => (
                            <TodoItem item={item} key={item.id} />
                    ))}
                </ul>
            </div>
        </section>
     );
}
 
export default ToDoList;