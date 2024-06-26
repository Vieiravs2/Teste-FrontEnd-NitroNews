import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <button className="font-sans bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded">
      Botão Tailwind
    </button>
  )
}

export default App
