import React from 'react'
import "../homepage/homepageStyle.css"
import "./component.css"
import arrow from "../Assets/image/right_arrow.png"
import topography from "../Assets/image/topography.png"


export default function FieldComponent({ desc, GDD, fieldName}) {
  return (
      <div className='parent_field_div'>
          <div className='first-row'>
              <img src={topography} className="main-img" height={52} width={52} style={{ "marginRight": "15px" }} />
              {/* <div></div> */}
          <h6>{fieldName}</h6>
          <p className='current-GDD light-txt'>{ GDD}</p>
          </div>
         
          <p className='desc'>{desc}</p>
          <img src={arrow} className="right-arrow"/>
    </div>
  )
}
