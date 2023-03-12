import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'
import './todo-list.css'

const ToDoList = () => {
    const todoList = useSelector(state => state.todoes.todoList)
    return ( 
        <section className="section-list">
            <div className="container">
                {todoList.length === 0 ? 
                    <div className='todo-list-alarm'>
                        <svg width="35px" height="35px" viewBox="0 0 1024 1024" fill="#FF8303" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M249.6 367.2c0 36 29.6 65.6 65.6 65.6s65.6-29.6 65.6-65.6-29.6-65.6-65.6-65.6-65.6 29.6-65.6 65.6zM512 790.4c214.4 0 259.2-194.4 259.2-194.4H252.8S297.6 790.4 512 790.4z" fill=""></path>
                                <path d="M512 1010.4c-274.4 0-497.6-224-497.6-498.4S237.6 14.4 512 14.4s498.4 223.2 498.4 498.4-224 497.6-498.4 497.6zM512 68C267.2 68 68 267.2 68 512s199.2 444 444 444 444-199.2 444-444S756.8 68 512 68z" fill=""></path>
                                <path d="M643.2 367.2c0 36 29.6 65.6 65.6 65.6 36 0 65.6-29.6 65.6-65.6s-29.6-65.6-65.6-65.6c-36 0-65.6 29.6-65.6 65.6z" fill=""></path>
                            </g>
                        </svg>
                        <h2 className='todo-list-alarm__title'>No any todoes...</h2> 
                    </div>  
                    : <ul className="todo-list">
                        {todoList.map((item) => (
                                <TodoItem item={item} key={item.id} />
                        ))}
                </ul>}
            </div>
        </section>
     );
}
 
export default ToDoList;