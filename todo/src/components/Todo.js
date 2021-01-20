import React from 'react'

function Todo({todo, complete}) {
    return (
        <div
        onClick = {() => complete(todo.id)}
        className = {`task ${todo.completed ? "completed" : ""}`}>
            <p>{todo.todo}</p>
            {` ${todo.completed ? "Task completed" : ""}`}
        </div>
    )
}

export default Todo;