import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>2nd Project</h1>
      <h2>Counter Value: 10</h2>


      <button>Add Value</button>
      <br />
      <button>Decrease Value</button>
    </>
  )
}

export default App
