import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./headerstylesheet.css"

export default function PageSubheader({title}) {
  const navigate = useNavigate();
  const goBack = () =>{
    navigate(-1);
  }
  return (
    <div className='subheader-div1'>
      <div className='subheader-div2'>
        <div>
      <i class="fa fa-chevron-left" onClick={goBack} style={{"color":"grey", "marginRight":"20px"}}></i>
          {title}
        </div>
      </div>
      </div>
  )
}
