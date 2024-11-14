import { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Header.css';

export const Header = () => {
  const { todoListTask } = useContext(AppContext);
  const [complete, setComplete] = useState(0);
  useEffect(()=>{
    let total = todoListTask.reduce((total, current)=> {
      if (current.complete) {
        total += 1;
      }
      return total;
    }, 0);
    setComplete(total);
  },[todoListTask])
  
  return (
    <header className='header'>
      <h1 className='title'> <span className='purple'>ToDo</span>  Machine</h1>
      {(Object.keys(todoListTask).length > 0)?
        <h2 className='task_complete'>Ha completado <span className='purple'>{complete}</span> de <span className='purple'>{todoListTask.length} Todo&apos;s</span></h2>
        :
        <h2 className='task_complete'>No tienes <span className='purple'>Todo&apos;s</span> agregados. <span className='purple'>Crea</span> uno nuevo</h2>
        
      }
    </header>
  )
}
  
