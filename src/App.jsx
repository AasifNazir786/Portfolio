import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectSection from './pages/Projects'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='home' element={<HomePage />}/>
        <Route path='projects' element={<ProjectSection />} />
      </Routes>
    </Router>
    
  )
}

export default App