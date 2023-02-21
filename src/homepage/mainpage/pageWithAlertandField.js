import React, { useState, useEffect } from 'react'
import AlertComponent from '../../components/alert_component'
import FieldComponent from '../../components/field_component'
import AppHeader from '../../headers/appheader'
import "../homepageStyle.css"
import "./mainpage.css"
import alert from '../../Assets/image/alert.png'

// function PageWithAlertandField() {
//   const [farms, setFarms] = useState([]);
//   const [selectedFarm, setSelectedFarm] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://63bdda61e348cb076204aebb.mockapi.io/api/v1/sensors');
//         const data = await response.json();
//         setFarms(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className='parent_div'>
//       <AppHeader />

//       <div className='image-dropdown'>
//         <img className='main-img' src="https://img.freepik.com/free-vector/farmer-with-animal-farm-farm-scene-cartoon-style_1308-52911.jpg?w=2000" height={45} width={45} />
//         <select className='farmname-dropdown'>
//           <option>Farm Name</option>
//           <option>farm2</option>
//         </select>
//       </div>
//       {selectedFarm ? (
//         <FarmDetails farm={selectedFarm} setSelectedFarm={setSelectedFarm} />
//       ) : (
//         <FarmList farms={farms} setSelectedFarm={setSelectedFarm} />
//       )}
//     </div>
//     </div>
//   );
// }

function FarmList({ farms, setSelectedFarm }) {
  return (
    <div>
      {farms.length > 0 && (
        <ul style={{ color: 'black' }}>
          {farms.map(farm => (
            <li style={{ color: 'black' }} key={farm.id} onClick={() => setSelectedFarm(farm)}>
              {farm.fieldName}
              {farm.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FarmDetails({ farm, setSelectedFarm }) {
  return (
    <div>
      <h2>{farm.fieldName}</h2>
      <button onClick={() => setSelectedFarm(null)}>Back to list</button>
    </div>
  );
}


function PageWithAlertandField() {

  const [farms, setFarms] = useState([]);
  const [selectedFarm, setSelectedFarm] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://63bdda61e348cb076204aebb.mockapi.io/api/v1/sensors');
        const data = await response.json();
        setFarms(data.filter(item => item.serialNumber <= 20));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div className='parent_div'>
      <AppHeader />

      <div className='image-dropdown'>
        <img className='main-img' src="https://img.freepik.com/free-vector/farmer-with-animal-farm-farm-scene-cartoon-style_1308-52911.jpg?w=2000" height={45} width={45} />
        <select className='farmname-dropdown'>
          {farms.map((response)=>(
             <option>{response.farm}</option>
          )
          )}
        </select>
      </div>

      <h4 style={{ fontFamily: "Roboto", fontWeight: "800", margin: "3rem 0 2rem -1rem" }}>Alerts</h4>
      <div className='alert-container'>
    {farms.length > 0 ? (
        <div>
          {farms.map((item) => (
            <div className='alert_parent_div' key={item.serialNumber}>
               <img src={alert} />
               <div className='alert-txt'>
          <p className='first-txt  desc'>Low battery low on Sensor <span>{item.serialNumber}</span></p>
          <p className='light-txt'>Today</p>
          </div>
          <div className='alert-txt'>
          <p className='first-txt  desc'>GGD exceeded on field <span>{item.fieldName}</span></p>
          <p className='light-txt'>Yesterday</p>
          </div>
            </div>
          ))}
        </div>
        
      ) : (
        <p>There is not any alert currently.</p>
      )}
      </div>
      <h4 style={{ fontFamily: "Roboto", fontWeight: "800", margin: "4rem 0 2rem -1rem" }}>Fields</h4>
      
      {selectedFarm ? (
        <FarmDetails farm={selectedFarm} setSelectedFarm={setSelectedFarm} />
      ) : (
        <FarmList farms={farms} setSelectedFarm={setSelectedFarm} />
      )}
  <div className='parent_field_div'>
          <div className='first-row'>
              <img src={topography} className="main-img" height={52} width={52} style={{ "marginRight": "15px" }} />
              {/* <div></div> */}
          <h6>{fieldName}</h6>
          <p className='current-GDD light-txt'>{ GDD}</p>
          </div>
         
          <p className='desc'>{desc}</p>
          <img src={arrow} className="right-arrow"/>
    </div>




    </div>

    



  )
}

export default PageWithAlertandField
