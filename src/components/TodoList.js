import React from "react";

const TodoList = ({todolists,nextId,setTodolists }) => {
    return(
        <>
            {todolists.map((list,i)=>{
            return (
            <li className="todolist-list" key={i}>

                <span className="todolist-todo">
                       {list.list}
                </span>
                <div className="todolist-buttons">
                
                    <button 
                        className="todolist-delete"
                        onClick={()=>{
                            console.log(list.id);
                            setTodolists( todolists.filter((todolist)=>{
                                return list.id !== todolist.id
                                // 참인걸 남기겠다.
                            })) 
                           
                        }}    
                    >삭제</button>
                    <button className="todolist-modify">수정</button>
                </div>
            </li>
            )
        })}

        </>
          


    )
}

export default TodoList;