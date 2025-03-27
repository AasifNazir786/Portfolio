import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from './components/About/AboutMe';
import Certificates from './components/Certificates/Certificates';
import TechStack from './components/TechStack/TechStack';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import ProjectPage from './pages/ProjectsPage';
import MyServices from './pages/ServicesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="home" element={<Layout><HomePage /></Layout>} />
        <Route path="projects" element={<Layout><ProjectPage /></Layout>} />
        <Route path="services" element={<Layout><MyServices /></Layout>} />
        <Route path='contacts' element={<Layout><Contact /></Layout>} />
        <Route path='about' element={<Layout><AboutMe /></Layout>} />
        <Route path='techStack' element={<Layout><TechStack /></Layout>} />
        <Route path='certificates' element={<Layout><Certificates /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
