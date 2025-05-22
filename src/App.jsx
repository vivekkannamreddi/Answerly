import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  const [postData, setPostData] = useState([]);

  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
