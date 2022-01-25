import React from "react";
import { useRef, useState } from 'react';
import TodoList from "./TodoList";
const TodoBody = ({ nextId}) => {
    const [todoInput, setTodoInput] = useState('');
    const [todolists, setTodolists] = useState([]);
    const onChange = (e)=>{
        setTodoInput(e.target.value);
      }
      
    return(
        <div className="todo-body">
            <main className="todo-body-shape">
                <header className="todo-body-input">
                    <h3>무엇을 하시겠습니까?</h3>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        const coppiedArray = [...todolists];
                        
                        coppiedArray.push({
                            id:nextId.current,
                            list:todoInput,
                        });
                        setTodolists(coppiedArray);
                    
                        setTodoInput('');
                        nextId.current += 1;
                         
                    }}>
                        <input onChange={onChange} value={todoInput} />
                        <button >등록</button>
                    </form>
                </header>
                <ul className="todo-body-lists">
                 
                    <TodoList
                        todolists={todolists}
                        nextId={nextId}  
                        setTodolists={setTodolists}
                    />
                </ul>
           </main>
        </div>
    )
}

export default TodoBody;