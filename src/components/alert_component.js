import React from 'react'
import alert from "../image/alert.png"
import "./component.css"
    
function AlertComponent({desc , date}) {
  return (
      <div className='alert_parent_div'>
          <img src={alert} />
          <div className='alert-txt'>
          <p className='first-txt  desc'>{ desc}</p>
          <p className='light-txt'>{ date}</p>
          </div>
         
    </div>
  )
}

export default AlertComponent