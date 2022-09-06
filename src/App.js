import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Community from './pages/Community'
import SignUp from './pages/SignUp'

const App = () => {
  return (
  <>
  <Navbar/>

  <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/community' element={<Community/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/signup' element={<SignUp/>}></Route>
    
  </Routes>
  </>
  )
}

export default App