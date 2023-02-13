import React , { useState } from 'react'
import AppHeader from "../../headers/appheader"
import PageSubheader from '../../headers/pagesubheader'
import vector from "../../Assets/image/Vector (1).png"
import "../homepageStyle.css"
import SensorModal from './sensor_modal'

export default function SensorPage() {
  const [openModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(prev => !prev)
  }
  return (
    <div>
      <AppHeader />
      <PageSubheader title="Field Name 1" />

      <div className='parent_div'>
        <div className='second_div'>
          <img className='main-img' src={vector} style={{ "marginTop": "5rem" }} />

          <h1>Welcome to Agino</h1>
          <section>
            <p>welcome to agin application which help you to know even i
              don't know the purpose of this application so e purpose of this app
              just follow along i n't know what n't know what i am  i am writing  elcome to agino this is an application which help you to know even i

            </p>
          </section>

          <button className='button' onClick={toggleModal}> Add My First Sensor</button>

        </div>
        {openModal && <SensorModal openModal={openModal} toggleModal={toggleModal} />}

      </div>
    </div>
  )
}
