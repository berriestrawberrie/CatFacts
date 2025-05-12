import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import API from './components/api';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/CatFacts" element={<API />}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
