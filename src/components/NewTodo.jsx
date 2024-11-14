import { useContext } from 'react';
import { useState } from 'react';
import AppContext from '../context/AppContext';
import '../styles/NewTodo.css';

export const NewTodo = () => {
  const { setAddTodo, setActiveModal } = useContext(AppContext);
  const [texto, setTexto] = useState('');

  //Random id
  const idGenerator = () => {
    const data = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return data+random;
  };
  //Add New Todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if(Object.keys(texto).length > 0){
      const newTodo = {
        task: texto, 
        complete:false, 
        id : idGenerator()
      }
      setAddTodo(newTodo)
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
