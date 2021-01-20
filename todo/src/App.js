import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import React, {useReducer} from "react"
import reducer, {InitialState} from "./reducers/"
import actions from "./actions/"

function App() {
  const [state, dispatch] = useReducer(reducer, InitialState)
  
  const addTodo = (todo) => {
    dispatch(actions.setTodo(todo))
  }

  const killTodo = () => {
    dispatch(actions.clearTodo())
  }

  const complete = (todoID) => {
    dispatch(actions.setComplete(todoID))
  }
  return (
    <div>
      <TodoForm addTodo={addTodo}  killTodo={killTodo}/>
      <TodoList complete={complete} listTodo={state.todos}/>
    </div>
  );
}

export default App;