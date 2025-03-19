import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectsPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='home' element={<HomePage />}/>
        <Route path='projects' element={<ProjectPage />} />
        {/* <Route path='card' element={<Card />} /> */}
      </Routes>
    </Router>
    
  )
}

export default App