import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Header.css';

export const Header = () => {
  const { completedTodo, totalTodo, } = useContext(AppContext);
  
  return (
    <header className='header'>
      <h1 className='title'> <span className='purple'>Administrador </span>  de tareas</h1>
      {(totalTodo > 0)?
        <h2 className='task_complete'>Ha completado <span className='purple'>{completedTodo}</span> de <span className='purple'>{totalTodo} tareas</span></h2>
        :
        <h2 className='task_complete'>No tienes <span className='purple'>Tareas</span> agregados. <span className='purple'>Crea</span> uno nuevo</h2>
      }
    </header>
  )
}
  
