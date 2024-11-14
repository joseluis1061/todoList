import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Todo } from '../Todo/Todo';
import './TodoList.css';


export const TodoList = () => {
  const { searchedTodos } = useContext(AppContext);
  return (
    <section className='todo_list'>
      <div className="todo_list_container">
        <h3><span className="purple">Lista</span> de tareas</h3>
        {
         searchedTodos && searchedTodos.map((todo)=>{
            return <Todo 
              todo ={ todo } 
              key={todo.id}
            />
          })
        }
      </div>
    </section>
  )
}