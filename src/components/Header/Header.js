import Modal from "../Modal/Modal";
import AddToDo from "../AddToDo/AddToDo";
import { useState } from "react";
import './header.css'
const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    return ( 
        <>
            <header className="header">
                <h1 className="header__title">Todo List</h1>
                <button className="button header__button" onClick={() => setModalActive(true)}>+</button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <AddToDo setActive={setModalActive}/>
                </Modal>
            </header>
        </>
     );
}
 
export default Header;