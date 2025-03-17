import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useTodoStore } from './store/list-store'
import { TodoItem } from './components/TodoItem.jsx'

function App() {
  const [text, setText] = useState('');
  const {todoList, add} = useTodoStore();
  return (
    <div>
      <h2 className='text-white'>Todo List</h2>
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={(e) => add(text)}>Add</button>
      {
        todoList?.map(item => <TodoItem desc={item} key={item} />)
      }
    </div>
  )
}

export default App
