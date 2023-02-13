
import CreateFarmPage from './homepage/createFarmPage';
import LandingPage from './homepage/landingPage';
import { Route, Routes } from "react-router-dom"
import SelectedFarmPage from './homepage/selectedfarm';
import SensorPage from './homepage/sensor/sensorpage';
import ProfilePage from './headers/profilepage';
import HelpPage from './headers/helppage';
import PageWithAlertandField from './homepage/mainpage/pageWithAlertandField';
import PageWithStatistics from './homepage/mainpage/pageWithStatistics';
import Onboarding from './onboarding/onboarding1';
import Register from './onboarding/register';
import Verify from './onboarding/verify';
import UserComponent from './components/user_profileComponent';

function App() {

  return (
    <Routes>
      <Route path="/homepage" exact element={
        <LandingPage img="https://img.freepik.com/free-vector/farmer-with-animal-farm-farm-scene-cartoon-style_1308-52911.jpg?w=2000" buttonLable="CREATE MY FIRST FARM"
          height={180} width={180} />
      } />
<<<<<<< HEAD
      <Route path="/" element={<Onboarding />} />
=======

      <Route  class path="/"  className ='app'element={<Onboarding />} />
>>>>>>> 54b9c123508728e6d863c736ea890d99364a65d4
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/createFarm" element={<CreateFarmPage />} />
      <Route path="/selectedFarmPage" element={<SelectedFarmPage />} />
      <Route path="/sensorPage" element={<SensorPage />} />
      <Route path="/profilePage" element={<ProfilePage />} />
      <Route path="/helpPage" element={<HelpPage />} />
      <Route path="/alertPage" element={<PageWithAlertandField />} />
      <Route path="/statisticsPage" element={<PageWithStatistics />} />
      <Route path="/userdd" element={<UserComponent />} />
      

    </Routes>


  );
}

export default App;
