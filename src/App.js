import React, { useState,useEffect } from "react";
import TodoList from './TodoList';
import InputForm from "./InputForm";

function App(){

    const [todo , setTodo] = useState([]);

    function updateList(inputText){
        setTodo((prev)=>([...prev , inputText]))
    }

    useEffect(()=>{
        const arr = localStorage.getItem('list');
        if(arr){
            setTodo(JSON.parse(arr))
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(todo))
    },[todo])

    function DeleteItem(id){
        setTodo((prev)=>{
            return prev.filter((item,index)=>{
                return index !== id;
            })
        })        
    }

    return <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <InputForm onAdd={updateList} />
        <div>
            <ul>
                {todo.map((item,index)=>(<TodoList key={index} ondeleteitem={DeleteItem} id={index} text={item} />))}
            </ul>
            <form onSubmit={(e)=>{e.preventDefault();localStorage.removeItem('list');setTodo([])}}>
                <button className="clear" type="submit">Reset</button>
            </form>
        </div>
    </div>;
}

export default App;