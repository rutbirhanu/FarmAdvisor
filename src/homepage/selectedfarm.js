import React, { useState, useEffect } from 'react'
import "./homepageStyle.css"
import CreateFieldModal from './createFieldModal'
import AppHeader from "../headers/appheader"
import aginofirst from '../Assets/image/agino-first.png';
export default function SelectedFarmPage() {
  const [openModal, setModal] = useState();

  const toggleModal = () => {
    setModal(prev => !prev)
  }

  const [responses, setResponses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6297e3ac8d77ad6f750a59ff.mockapi.io/api/v1/farm');
        const data = await response.json();
        setResponses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='controller-div'>
      <AppHeader />
      <div className='main-div'>
        <div className='header-div'>
          <div className='image-dropdown'>
            <img className='main-img' src={aginofirst} height={45} width={45} />
            <select className='farmname-dropdown'>
              {responses.map(response => (
                <option key={response.id}>{response.farmName}</option>
              ))}
            </select>
          </div>
        </div>
        <span >
          <i class="fa fa-ellipsis-v" style={{ color: "black" }}></i>
        </span>
      </div>
      <div className='parent_div'>
        <div className='second_div'>
          <img className='main-img' src="https://www.topchinatravel.com/pic/city/xinjiang/tips/grasslands-in-xinjiang-02.jpg" width={150} height={150} />

          <h1>Add a Field</h1>
          <section>
            <p>add new field to the farm this a new  application which help you to know even i
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

