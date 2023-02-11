import React from 'react'
import "./homepageStyle.css"
import { useState } from 'react'
import CreateFarmPage from './createFarmPage'
import AppHeader from '../headers/appheader';
import FieldComponent from '../components/field_component';
import AlertComponent from '../components/alert_component';
import SensorComponent from '../components/sensor_component';

export default function LandingPage({ img, buttonLable, height, width }) {
  const [openModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(prev => !prev)
  }

  return (
    <div className='parent_div'>
      <AppHeader />

      <div className='second_div'>

        <img className='main-img' src={img} width={width} height={height} />
        <h1>Welcome to Agino</h1>
        <section>
          <p>welcome to agin application which help you to know even i
            don't know the purpose of this application so e purpose of this app
            just follow along i n't know what n't know what i am  i am writing  elcome to agino this is an application which help you to know even i

          </p>
        </section>

        <button className='button' onClick={toggleModal}> {buttonLable}</button>
        {openModal && <CreateFarmPage toggleModal={toggleModal} />}

      </div>
    </div>
  )
}
