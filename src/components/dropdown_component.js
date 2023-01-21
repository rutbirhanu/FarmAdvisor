import React from 'react'
import "./component.css"
import dropdown from "../Assets/dropdown.png"
import { useState } from 'react'

const  DropdownComponent=({ number })=> {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleHelp = () => {
    setIsOpen(prev=>!prev)
  }

  return (
    <div className='dropdown-component'>
      <p>Question{number}</p>
      <button className='drop-btn' onClick={toggleHelp}><img src={dropdown} /></button>
      { isOpen && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a egestas ultrices vitae
        nam sed sit velit elementum. Suspendisse ultrices velit mauris in vel cursus sagittis.</p>}
    </div>
  )
}
export default DropdownComponent;