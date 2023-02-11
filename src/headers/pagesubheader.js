import React from 'react'
import "./headerstylesheet.css"
import { useNavigate } from 'react-router-dom'

export default function PageSubheader({ title }) {
  const history=useNavigate()
  return (
    <div className='subheader-div1'>
      <div className='subheader-div2'>
        <div>
      <i onClick={()=>{history(-1)}} class="fa fa-chevron-left" style={{"color":"grey", "marginRight":"20px"}}></i>
          {title}
        </div>
      </div>
      </div>
  )
}
