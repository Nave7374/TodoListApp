import React, { useState } from "react";

function InputForm(props){

    const [inputText , setInputText] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (<form className="form" onSubmit={(e) =>{
        e.preventDefault();
        props.onAdd(inputText)
        setInputText("")
    }}>
        <input type="text" value={inputText} onChange={handleChange} required />
        <button type="submit">Add</button>
    </form>);

}

export default InputForm;