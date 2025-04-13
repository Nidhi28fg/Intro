import { useState } from 'react'
import './App.css'
import Introduction from './component/Introduction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Introduction />
    </>
  )
}

export default App
