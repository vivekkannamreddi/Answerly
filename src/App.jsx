import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Posts from './pages/posts/Posts'
import Signup from './components/Signup'
import Login from './components/Login'
import CreatePost from './components/CreatePost'
import { AuthProvider } from './AuthContext'
import ShowPost from './components/ShowPost'

function App() {
  const [postData, setPostData] = useState([]);

  return (
    <AuthProvider>
      <div className='app'>
        <Navbar />
        <Routes>  
          <Route path="/" element={<Hero />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreatePost/>} />
          <Route path="/showPost/:id" element={<ShowPost/>} />
        </Routes>
        
      </div>
      </AuthProvider>
  )
}

export default App
