import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Todo.css';
export const Todo = (todo) => {
  const { handleCompletedTodo, handleDeleteTodo } = useContext(AppContext);

  const handleCompleted = () =>{
    handleCompletedTodo(todo.todo.id);
  };

  const handleDeled = () =>{
    handleDeleteTodo(todo.todo.id);
  };

  return (
    <div className='todo'>
      <span className={todo.todo.completed=== true?
          'check'
          :
          'todo_complete'        
      }
        onClick={handleCompleted}
      >
        <i className="fa-solid fa-check-double"></i>
      </span>
      <li className='todo_task'>{todo.todo.text}</li>
      <span 
        className='todo_delete'
        onClick={handleDeled}
      ><i className="fa-solid fa-trash-can"></i></span>
    </div>
  )
}

