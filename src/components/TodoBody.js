import React from "react";
import { useRef, useState } from 'react';
import TodoList from "./TodoList";
const TodoBody = ({ nextId}) => {
    const [todoInput, setTodoInput] = useState('');
    const [todolists, setTodolists] = useState([]);
    const focused = useRef('');
    const onChange = (e)=>{

        setTodoInput(e.target.value);

      }
    const onSubmit = (e) => {
        e.preventDefault();
        const coppiedArray = [...todolists];
        
        coppiedArray.push({
            id:nextId.current,
            list:todoInput,
        });
        setTodolists(coppiedArray);
    
        setTodoInput('');
        nextId.current += 1;
        focused.current.focus();
         
    }
    const onRemove = (clickedId) => {


        const yesOrNo = window.prompt("삭제하겠습니까>");

        if(yesOrNo === '' || yesOrNo ){
            setTodolists( 
                todolists.filter((list,i)=>{
                    return list.id !== clickedId
            })
            )
    }
    }
    return(
        <div className="todo-body">
            <main className="todo-body-shape">
                <header className="todo-body-input">
                    <h3>무엇을 하시겠습니까?</h3>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} value={todoInput}
                        ref={focused}
                        />
                        <button>추가</button>
                    </form>
                </header>

                <ul className="todo-body-lists">
                    <TodoList
                        todolists={todolists}
                        nextId={nextId}  
                        setTodolists={setTodolists}
                        onRemove={onRemove}
                      
                    />
                </ul>
           </main>
        </div>
    )
}

export default TodoBody;