import React from 'react'
import logo from "../Assets/image/agino_logo.png"
import profile from "../Assets/image/profile.png"
import add from "../Assets/image/add.png"
import "./headerstylesheet.css"
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
import UserComponent from '../components/user_profileComponent'
import Popup from 'reactjs-popup';

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
          {/* <Link to="/userdd">
            <button className='btn'>
              <img src={profile} />
            </button></Link> */}
            <span style={{fontSize:'1em',color:'white'} }>
               <Popup trigger={<Icon.PersonFill />} position='left top'>           
<UserComponent />
</Popup></span>

        </div>
      </div>
    </div>
  )
}
