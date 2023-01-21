// import './App.css';
import CreateFarmPage from './homepage/createFarmPage';
import LandingPage from './homepage/landingPage';
import { Route, Routes } from "react-router-dom"
import SelectedFarmPage from './homepage/selectedfarm';
import { useState } from 'react';
import SensorPage from './homepage/sensor/sensorpage';
import ProfilePage from './headers/profilepage';
import HelpPage from './headers/helppage';
import Weather from './components/wheather/weatherForecast';

function App() {
  const [openModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(prev => !prev)
  }
  return (

    <Routes>
      <Route path="" exact element={
        <LandingPage img="https://img.freepik.com/free-vector/farmer-with-animal-farm-farm-scene-cartoon-style_1308-52911.jpg?w=2000" buttonLable="CREATE MY FIRST FARM"
          height={180} width={180} />
      } />
      <Route path="/createFarm" element={<CreateFarmPage />} />
      <Route path="/selectedFarmPage" element={<SelectedFarmPage />} />
      <Route path="/sensorPage" element={<SensorPage />} />
      <Route path="/profilePage" element={<ProfilePage />} />
      <Route path="/helpPage" element={<HelpPage/>} />
      <Route path='/fieldName' element={<Weather />} />
    </Routes>

  );
}

export default App;
