import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
