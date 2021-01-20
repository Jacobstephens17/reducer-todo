import React, { useState } from 'react'


export default function TodoForm({killTodo, addTodo}) {

    const [todoInput, setTodoInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todoInput);
        setTodoInput(''); 
    }

    const handleChange = (e) => {
        setTodoInput(e.target.value);
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <h1>To Do List</h1>
                <label>Tasks: </label>
                <input
                type ="text"
                name = "newTitleText"
                onChange = {handleChange}
                value = {todoInput}
                ></input>
                <button>Submit</button>
                <button 
                onClick = {killTodo}>Clear</button>
            </form>
        </div>
    )
}