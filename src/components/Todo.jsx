import '../styles/Todo.css';

export const Todo = ({ todo, setCompletedTodo, setDeledTodo }) => {

  const handleCompleted = () =>{
    const changeCheck = todo;
    changeCheck.complete = !todo.complete;
    setCompletedTodo(changeCheck)
  };

  const handleDeled = () =>{
    const changeDeled = todo;
    setDeledTodo(changeDeled)
  };

  return (
    <div className='todo'>
      <span className={todo.complete=== true?
          'check'
          :
          'todo_complete'        
      }
        onClick={handleCompleted}
      >
        <i className="fa-solid fa-check-double"></i>
      </span>
      <li className='todo_task'>{todo.task}</li>
      <span 
        className='todo_delete'
        onClick={handleDeled}
      ><i className="fa-solid fa-trash-can"></i></span>
    </div>
  )
}

