import { useContext } from 'react';
import { useState } from 'react';
import AppContext from '../../context/AppContext';
import './NewTodo.css';

export const NewTodo = () => {
  const { addTodo, setActiveModal } = useContext(AppContext);
  const [texto, setTexto] = useState('');

  //Add New Todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if(Object.keys(texto).length > 0){
      addTodo(texto)
      setTexto('');
      setActiveModal(false);
    }else{
      console.log('Agrega un texto a tu tarea');
    }    
  };
  //Cancel Add Todo
  const handelCancelAddTodo = (e) => {
    e.preventDefault();
    setActiveModal(false);
    setTexto('');
  };

  return (
    <form className='new_todo'>
      <h2>Escribe un nuevo <span className="purple">ToDo</span></h2>
     
      <textarea 
        onChange={(e)=>setTexto(e.target.value)}
        value = { texto }
        type ='text-area' 
        spellCheck = 'true'
        placeholder = 'New todo...'
      >
      </textarea>

      <div className="btn_container">
        <button 
          onClick={handelCancelAddTodo}
          className='btn_new btn_cancel'>
          Cancelar
        </button>

        <button 
          className='btn_new btn_add'
          onClick={handleAddTodo}
        >
          Agregar
        </button>
      </div>
    </form>
  )
}
