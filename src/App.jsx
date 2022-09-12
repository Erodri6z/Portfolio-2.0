import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

import Nav from './component/Nav/Nav'
import About from './component/About/About';

function App() {
  return (
    <main>
      <Nav className="nav" />
      <Routes>
        {/* <Route path='/' element={<Landing />} /> */}
        <Route path='/info' element={<About />} />

      </Routes>
    </main>
  )
}

export default App;
