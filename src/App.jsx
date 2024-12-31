import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { Link, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-wrapper">
      <NavBar />
      <div className="content-container">
        <div className="home-container">
          <h1 className="home-title">Welcome to the shop!</h1>
          <h3 className="home-subtitle">Start Buying shit now!</h3>
          <button className="shop-now-btn" onClick={() => navigate('/shop')}>
            Start shopping now!
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
