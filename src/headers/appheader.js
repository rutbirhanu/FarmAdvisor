import React from 'react'
import logo from "../image/agino_logo.png"
import profile from "../image/profile.png"
import add from "../image/add.png"
import "./headerstylesheet.css"
import { Link } from 'react-router-dom'

export default function AppHeader() {
  return (
    <div className='first-container'>
      <div className='container'>
        <div>
          <img src={logo} />
        </div>
        <div>
          <Link to="/statisticsPage">
          <button className='btn'>
              <img src={add} />
          </button>
              
          </Link>
      
          <Link to="/profilePage">
            <button className='btn'>
              <img src={profile} />
            </button></Link>

        </div>
      </div>
    </div>
  )
}
