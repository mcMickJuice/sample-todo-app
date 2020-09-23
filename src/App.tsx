import * as React from 'react'
import './styles.css'
import { updateTodos, getTodos } from './api'

export default function App() {
  const [todos, setTodo] = React.useState<string[]>(() => getTodos())
  const [text, setText] = React.useState<string>('')

  function handleAddTodo() {
    if (text === '') return
    setTodo((state) => [...state, text])
  }

  React.useEffect(() => {
    console.log('updating todos')
    updateTodos(todos)
  }, [todos])

  return (
    <div className="App">
      <h1>Hi there</h1>
      <input value={text} onChange={(evt: any) => setText(evt.target.value)} />
      <button onClick={handleAddTodo}>Add todo</button>
      {todos.length === 0 ? 'No Todos Today' : null}
      {todos.map((t) => (
        <div key={t}>{t}</div>
      ))}
    </div>
  )
}
