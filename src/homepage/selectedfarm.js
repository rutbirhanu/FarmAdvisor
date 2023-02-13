import React,  { useState } from 'react'
import "./homepageStyle.css"
import CreateFieldModal from './createFieldModal'
import AppHeader from "../headers/appheader"

export default function SelectedFarmPage() {
  const [openModal, setModal] = useState();

  const toggleModal = () => {
    setModal(prev => !prev)
  }
  return (
    <div className='controller-div'>
      <AppHeader />
      <div className='main-div'>
        <div className='header-div'>
          <div className='image-dropdown'>
            <img className='main-img' src="https://img.freepik.com/free-vector/farmer-with-animal-farm-farm-scene-cartoon-style_1308-52911.jpg?w=2000" height={45} width={45} />
            <select className='farmname-dropdown'>
              <option>Farm Name</option>
              <option>farm2</option>
            </select>
          </div>
        </div>
        <span >
          <i class="fa fa-ellipsis-v" style={{color:"black"}}></i>
        </span>
      </div>
      <div className='parent_div'>
        <div className='second_div'>
          <img className='main-img'src="https://www.topchinatravel.com/pic/city/xinjiang/tips/grasslands-in-xinjiang-02.jpg" width={150} height={150} />

          <h1>Welcome to Agino</h1>
          <section>
            <p>welcome to agin application which help you to know even i
              don't know the purpose of this application so e purpose of this app
              just follow along i n't know what n't know what i am  i am writing  elcome to agino this is an application which help you to know even i

            </p>
          </section>

          <button className='button' onClick={toggleModal}>ADD MY FIRST FIELD</button>

        </div>
      </div>

      {openModal && <CreateFieldModal openModal={openModal} toggleModal={toggleModal} />}

    </div>
  )
}
