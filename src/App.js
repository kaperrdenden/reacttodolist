import Header from './components/Header';
import TodoBody from './components/TodoBody';

import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [todoInput, setTodoInput] = useState('');
  const [todolists, setTodolists] = useState([]);
  const onChange = (e)=>{
    setTodoInput(e.target.value);
   

  }

  const nextId = useRef(1);


  return (
    <div className="App">
      <Header>

      </Header>
      <TodoBody 
        nextId={nextId}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        onChange={onChange}
        todolists={todolists}
        setTodolists={setTodolists}
       />
    </div>
  );
}

export default App;
