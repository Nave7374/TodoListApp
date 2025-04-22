import React, { useState } from "react";

function InputForm(props){

    const [inputText , setInputText] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (<div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={() =>{
            props.onAdd(inputText)
            setInputText("")
        }}>Add</button>
    </div>);

}

export default InputForm;