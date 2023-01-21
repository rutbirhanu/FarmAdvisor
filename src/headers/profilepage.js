import React from 'react'
import AppHeader from './appheader'
import PageSubheader from './pagesubheader'
import "./headerstylesheet.css"
import "../homepage/homepageStyle.css"
// import { useState } from 'react'
import shape from "../image/shape.png"
import "../components/component.css"
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggleHelp = (e) => {
  //   e.preventDefault()
  //   setIsOpen(prev => !prev)
  // }
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/helpPage`;
    navigate(path);
  }

  return (
    <>
      <AppHeader />
      <PageSubheader title="My Profile" />
      <div className='parent_div'>
        <div className='second-div'>
          <form  >
            <div className="mb-3">
              <label className="form-label">Phone </label>
              <input type="text" className="form-control" name="Phone" placeholder="Enter Phone Number" />
            </div>
            <hr />

            <div className='dropdown-component' style={{"padding":"0.4rem"}}>
              <p>Terms And Conditions</p>
              <button className='drop-btn' onClick={routeChange}><img alt='dropdown'src={shape} /></button>
              {/* {isOpen && <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a egestas ultrices vitae
                nam sed sit velit elementum. Suspendisse ultrices velit mauris in vel cursus sagitt m dolor sit amet, consectetur adipiscing elit. Nam a egestas ultrices vitae
                nam sed sit velit elementum. Suspendisse ultrices velit mauris in vel cursus sagitt m dolor sit amet, consectetur adipiscing elit. Nam a egestas ultrices vitae
                nam sed sit velit elementum. Suspendisse ultrices velit mauris in vel cursus sagittis.</p>} */}
            </div>

            <div className='delete'>Delete Account</div>
          </form>



        </div>
      </div>
    </>
  )
}
