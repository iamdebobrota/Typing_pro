import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import TypingGame from '../pages/TypingGame'
import TypingGuide from '../pages/TypingGuide'
import TypingPage from '../pages/TypingPage'

const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/guide" element={<TypingGuide/>}/>
            <Route path="/game" element={<TypingGame/>}/>
            <Route path="/typing" element={<TypingPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes