import React from 'react'
import AlertComponent from '../../components/alert_component'
import FieldComponent from '../../components/field_component'
import AppHeader from '../../headers/appheader'
import "../homepageStyle.css"
import "./mainpage.css"

function PageWithAlertandField() {
  return (
    <div className='parent_div'>
      <AppHeader />

      <div className='image-dropdown'>
        <img className='main-img' src="https://img.freepik.com/free-vector/farmer-with-animal-farm-farm-scene-cartoon-style_1308-52911.jpg?w=2000" height={45} width={45} />
        <select className='farmname-dropdown'>
          <option>Farm Name</option>
          <option>farm2</option>
        </select>
      </div>

      <h4 style={{ fontFamily: "Roboto", fontWeight: "800" , margin:"3rem 0 2rem -1rem"}}>Alerts</h4>
      <div className='alert-container'>
        <AlertComponent desc="Low ba59hjkhjk hjkhkkh hjkhjkhk" date="Today" />
        <AlertComponent desc="Low ba59hjkhjk hjkhkkh hjkhjkhk" date="Today" />
        <AlertComponent desc="Low ba59hjkhjk hjkhkkh hjkhjkhk" date="Today" />

      </div>

      <h4 style={{ fontFamily: "Roboto", fontWeight: "800", margin: "4rem 0 2rem -1rem" }}>Fields</h4>
      <FieldComponent desc="df dfjs djf dfd" fieldName="fdjf djf " GDD="df"/>
      <FieldComponent desc="df dfjs djf dfd" fieldName="fdjf djf " GDD="df"/>
      <FieldComponent desc="df dfjs djf dfd" fieldName="fdjf djf " GDD="df"/>
    </div>
  )
}

export default PageWithAlertandField