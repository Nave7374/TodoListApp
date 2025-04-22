import React from "react";

function TodoList(prpos){

    return <div onClick={() =>{
        prpos.ondeleteitem(prpos.id);
    }} >
        <li>{prpos.text}</li>
    </div>
}

export default TodoList;