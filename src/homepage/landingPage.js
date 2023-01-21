import React from 'react'
import "./homepageStyle.css"
import { useState } from 'react'
import CreateFarmPage from './createFarmPage'
import AppHeader from '../headers/appheader';
import welcome from '../image/welcome.png'

export default function LandingPage({  buttonLable }) {
  const [openModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(prev => !prev)
  }

  return (
    <>
    <AppHeader />
    <div className='parent_div'>

      
      <div className='second_div'>
        <img className='main-img' alt='home'src={welcome} />

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
    </>
  )
}
