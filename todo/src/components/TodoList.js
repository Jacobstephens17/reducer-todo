import React from 'react'
import Todo from './Todo'

function TodoList({complete, listTodo}) {
    return (
        <div>
            {listTodo.map(todo => <Todo key={todo.id} todo={todo} complete={complete}/>)}
        </div>
    )
}

export default TodoList