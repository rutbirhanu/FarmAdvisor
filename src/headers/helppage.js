import React from 'react'
import AppHeader from './appheader'
import PageSubheader from './pagesubheader'
import "./headerstylesheet.css"
import "../homepage/homepageStyle.css"
import DropdownComponent from '../components/dropdown_component'

export default function HelpPage() {
  return (
    <div>
      <AppHeader />
      <PageSubheader title="Help"  />
        <div className='parent_div'>
        <div className='help-content'>

          <h6 className='help-title' style={{"marginBottom":"2rem"}}>FAQ</h6>
          <DropdownComponent number="1"/>
          <DropdownComponent number="2"/>
          <DropdownComponent number="3"/>
          <DropdownComponent number="4"/>
          <DropdownComponent number="5"/>
          <DropdownComponent number="6"/>
          <DropdownComponent number="7"/>
        </div>
      </div>
    </div>
  )
}
