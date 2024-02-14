import { useState } from 'react'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>The pokemon knowledge quiz</h2>
      <h3>How much do you really know about the wonderful world of pokemon test your knowledge here and find out how good it is!!</h3>
      <Card />
    </div>
  )
}

export default App
