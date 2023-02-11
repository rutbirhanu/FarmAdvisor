import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './onboarding.css'
import aginosmart from '../image/agino-smart.png'
import logo from '../image/agino_logo.png'
import TermsAndConditionsModal from './termsAndCond';
const Onboarding =() =>{
    const [openModal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(prev => !prev)
    }
return (
    <div className='parent_div' style={{backgroundColor:"#F7F7F7"}}>
    <div className='first-container'>
      <div className='container'>
        <div>
          <img src={logo} />
        </div>
      </div>
    </div>
    <div className='second_div'>

      <img className='main-img' src={aginosmart} width={180} height={180} />
      <h1>Smart Farming</h1>
      <section>
        <p>welcome to agin application which help you to know even i
          don't know the purpose of this application so e purpose of this app
          just follow along i n't know what n't know what i am  i am writing  elcome to agino this is an application which help you to know even i

        </p>
      </section>
      <button className='button'  onClick={toggleModal}> SIGN UP WITH AGINO</button>
      {openModal && <TermsAndConditionsModal toggleModal={toggleModal} />}
      <div><span>Already have an accound?</span><Link to='#'>Log In</Link> </div>
    </div>
  </div>
);
}

export default Onboarding;