import React,{useState,useEffect} from 'react'
import AlertComponent from '../../components/alert_component'
import FieldComponent from '../../components/field_component'
import AppHeader from '../../headers/appheader'
import "../homepageStyle.css"
import "./mainpage.css"


function PageWithAlertandField() {
  const [farms, setFarms] = useState([]);
  const [selectedFarm, setSelectedFarm] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://63bdda61e348cb076204aebb.mockapi.io/api/v1/createFarm/');
        const data = await response.json();
        setFarms(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='parent_div'>
      <AppHeader />

      <div className='image-dropdown'>
        <img className='main-img' src="https://img.freepik.com/free-vector/farmer-with-animal-farm-farm-scene-cartoon-style_1308-52911.jpg?w=2000" height={45} width={45} />
        <select className='farmname-dropdown'>
          <option>Farm Name</option>
          <option>farm2</option>
        </select>
      </div>
      {selectedFarm ? (
        <FarmDetails farm={selectedFarm} setSelectedFarm={setSelectedFarm} />
      ) : (
        <FarmList farms={farms} setSelectedFarm={setSelectedFarm} />
      )}
    </div>
    </div>
  );
}

function FarmList({ farms, setSelectedFarm }) {
  return (
    <div>
      {farms.length>0 && (
    <ul style={{color:'black'}}>
      {farms.map(farm => (
        <li style={{color:'black'}} key={farm.id} onClick={() => setSelectedFarm(farm)}>
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
      <p>location: {farm.gdd}</p>
      <p>City: {farm.farmName}</p>
      <p>Country: {farm.id}</p>
      <button onClick={() => setSelectedFarm(null)}>Back to list</button>
    </div>
  );
}



// function PageWithAlertandField() {
//   return (
//     <div className='parent_div'>
//       <AppHeader />

//       <div className='image-dropdown'>
//         <img className='main-img' src="https://img.freepik.com/free-vector/farmer-with-animal-farm-farm-scene-cartoon-style_1308-52911.jpg?w=2000" height={45} width={45} />
//         <select className='farmname-dropdown'>
//           <option>Farm Name</option>
//           <option>farm2</option>
//         </select>
//       </div>

//       <h4 style={{ fontFamily: "Roboto", fontWeight: "800" , margin:"3rem 0 2rem -1rem"}}>Alerts</h4>
//       <div className='alert-container'>
//         <AlertComponent desc="Low ba59hjkhjk hjkhkkh hjkhjkhk" date="Today" />
//         <AlertComponent desc="Low ba59hjkhjk hjkhkkh hjkhjkhk" date="Today" />
//         <AlertComponent desc="Low ba59hjkhjk hjkhkkh hjkhjkhk" date="Today" />

//       </div>

//       <h4 style={{ fontFamily: "Roboto", fontWeight: "800", margin: "4rem 0 2rem -1rem" }}>Fields</h4>
//       <FieldComponent desc="df dfjs djf dfd" fieldName="fdjf djf " GDD="df"/>
//       <FieldComponent desc="df dfjs djf dfd" fieldName="fdjf djf " GDD="df"/>
//       <FieldComponent desc="df dfjs djf dfd" fieldName="fdjf djf " GDD="df"/>
//     </div>
//   )
// }

export default PageWithAlertandField
