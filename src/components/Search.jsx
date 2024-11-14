import { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Search.css';

export const Search = () => {
  const {searchTask, setSearchTask} = useContext(AppContext)
  const handleSearch = (e)=>{
    const data = e.target.value;
    setSearchTask(data);
  }

  return (
    <form className='search'>
      <div className="search_container">
      <span className="search_icon"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input 
        type="text" 
        placeholder='Search to do...' 
        className='search_input'
        value = {searchTask}    
        onChange={handleSearch}
      />
      </div>
    </form>
  )
}