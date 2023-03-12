import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/todoSlice";
import './delete-form.css'

const DeleteForm = ({id, setActive}) => {

    const dispatch = useDispatch()

    const removeTask = (id) => {
        dispatch(removeTodo(id))
        setActive(false)
    }
    return ( 
        <div className="delete-alarm">
            <h2 className="delete-alarm__title">Do you want delete this task?</h2>
            <div className="delete-alarm__buttons">
                <button className="button delete-alarm__button" onClick={() => removeTask(id)}>Delete</button>
                <button className="button delete-alarm__button" onClick={() => setActive(false)}>Cancel</button>
            </div>
        </div>
     );
}
 
export default DeleteForm;