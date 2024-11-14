import { useState } from 'react';
import {useLocalStorage} from './useLocalStorage'
const useInitState = () => {

  const [searchValue, setSearchValue] = useState('');
  const [activeModal, setActiveModal] = useState(false);

  const { item: todos, saveItem: saveTodo, error } = useLocalStorage('todos', []);

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completedTodo = todos.filter(item => {
    return !!item.completed
  }).length;

  const totalTodo = todos.length;

  //Random id
  const idGenerator = () => {
    const data = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return data+random;
  };

  const addTodo = (text) => {
    const newTodos = todos ? [...todos] : [];
      newTodos.push({
        id: idGenerator(),
        text,
        completed: false,
      });
      saveTodo(newTodos);
  };

  const handleCompletedTodo = (index) => {
    const newTodo = [...todos];
    const todoIndex = newTodo.findIndex(item => {
      return item.id === index;
    })

    newTodo[todoIndex].completed = !newTodo[todoIndex].completed;
    saveTodo(newTodo);
  }

  const handleDeleteTodo = (index) => {
    const newTodo = [...todos];
    const todoIndex = newTodo.findIndex(item => {
      return item.id === index;
    })
    newTodo.splice(todoIndex, 1);
    saveTodo(newTodo);
  }

  return {
    todos,
    saveTodo,
    completedTodo,
    totalTodo,
    searchedTodos,
    handleCompletedTodo,
    handleDeleteTodo,
    searchValue,
    setSearchValue,
    activeModal,
    setActiveModal,
    addTodo,
    error
  }
}

export default useInitState;