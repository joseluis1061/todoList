import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './BtnNewTodo.css';

export const BtnNewTodo = () => {
  const {activeModal, setActiveModal} = useContext(AppContext);
  const handleClick =()=>{
    setActiveModal(!activeModal);
  }
  return (
    <button
      className = 'btn_newtodo giro'
      onClick={handleClick}
      >
        <i className="fa-solid fa-plus"></i>
    </button>
  )
}
  