import { Layout } from './layout/Layout';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { TodoList } from './components/TodoList/TodoList';
import { BtnNewTodo } from './components/BtnNewTodo/BtnNewTodo';
import { NewTodo } from './components/NewTodo/NewTodo';
import { Modal } from './modal/Modal'; 

import AppContext from './context/AppContext';
import useInitState from './hooks/useInitState';
import './styles/App.css';

function App() {

  const initialState = useInitState();
  const {activeModal} = initialState;
  
  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <Layout>
          < Header /> 
          < Search />
          < TodoList />
          < BtnNewTodo />
          {
          activeModal && 
            <Modal>
              < NewTodo />
            </Modal>
          }
        </Layout>
      </div>

    </AppContext.Provider>
  )
}

export default App
