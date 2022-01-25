import Header from './components/Header';
import TodoBody from './components/TodoBody';

import './App.css';
import { useRef, useState } from 'react';

function App() {

  const nextId = useRef(1);

  return (
    <div className="App">
      <Header />
      
      <TodoBody 
        nextId={nextId}
      />
    </div>
  );
}

export default App;
