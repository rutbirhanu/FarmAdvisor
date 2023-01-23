import React from 'react'
import "./headerstylesheet.css"

export default function PageSubheader({title}) {
  return (
    <div className='subheader-div1'>
      <div className='subheader-div2'>
        <div>
      <i class="fa fa-chevron-left" style={{"color":"grey", "marginRight":"20px"}}></i>
          {title}
        </div>
      </div>
      </div>
  )
}
