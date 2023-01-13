import React from 'react'
import logo from "../image/agino_logo.png"
import profile from "../image/profile.png"
import add from "../image/add.png"
import "./headerstylesheet.css"
import { Link } from 'react-router-dom'

export default function AppHeader() {
  return (
    <div className=' container-fluid'>
      <div className='row'>
        <div className="col-md-12 navbar navbar-expand-lg header ">
          <img src={logo} alt='agino farm logo' className='logo' />
          {/* <PlusLg className='addIcon ' /> */}
          {/* <PersonFill className='profile float-right' /> */}

          <button className='btn addIcon float-right'>
            <img src={add} />
    </button>

          <Link to="/profilePage">
             <button className='btn Profile float-right'>
              <img src={profile} />
             </button></Link>


        </div>
      </div>
    </div>

  )
}
