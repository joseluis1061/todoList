import { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Todo.css';
// { todo, setCompletedTodo, setDeledTodo }
export const Todo = (todo) => {
  const { handleCompletedTodo, handleDeleteTodo } = useContext(AppContext);

  const handleCompleted = () =>{
    // const changeCheck = todo;
    // changeCheck.complete = !todo.complete;
    //setCompletedTodo(changeCheck)
    handleCompletedTodo(todo.id);
  };

  const handleDeled = () =>{
    //const changeDeled = todo;
    // setDeledTodo(changeDeled);
    handleDeleteTodo(todo.id);
  };

  return (
    <div className='todo'>
      <span className={todo.completed=== true?
          'check'
          :
          'todo_complete'        
      }
        onClick={handleCompleted}
      >
        <i className="fa-solid fa-check-double"></i>
      </span>
      <li className='todo_task'>{todo.text}</li>
      <span 
        className='todo_delete'
        onClick={handleDeled}
      ><i className="fa-solid fa-trash-can"></i></span>
    </div>
  )
}

