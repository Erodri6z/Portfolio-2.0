import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

import Landing from './component/Landing/Landing';
import Nav from './component/Nav/Nav'
import About from './component/About/About';
import Skill from './component/Skill/Skill';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <main>
      <Nav className="nav" />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Info' element={<About />} />
        <Route path='/Skill' element={<Skill />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App;
