import React, { useState } from 'react'
import AppHeader from '../../headers/appheader'
import PageSubheader from '../../headers/pagesubheader'
import "../homepageStyle.css"
import landscape from "../../image/landscape.png"
import SensorComponent from '../../components/sensor_component'
import "../../components/component.css"
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Forecast, Precipitation } from '../../components/wheather/Forecast'
function PageWithStatistics() {
    const [showSensor, setshowSensor] = useState(false);
    const handleSensor = () => {
        setshowSensor(current => !current) && <Icon.ChevronUp />
    }
    return (
        < div>
            <AppHeader />
            <PageSubheader title="Field Name" />
            <div className='parent_div' style={{ marginTop: "4rem" }}>

                <img src={landscape} />
                <p style={{ marginLeft: "2rem", marginTop: "-1.2rem" }}>127m above sea level</p>
                <div className='GDD-container'>
                    <span>
                        <h3>384</h3>
                        <p className='light-txt' style={{ marginLeft: "-16px" }}>Current GDD</p>
                    </span>
                    <div class="vl" ></div>
                    <span>
                        <h3>384</h3>
                        <p className='light-txt' style={{ marginLeft: "-16px" }}>GDD Goal</p>
                    </span>
                    <div class="vl" ></div>
                    <span>
                        <h3>384</h3>
                        <p className='light-txt' style={{ marginLeft: "-16px" }}>To cutting </p>
                    </span>
                </div>
                <p className='light-txt' style={{ margin: "-16px 0 0 -17px" }}>Last sensor reset: 04/03/22 (auto reset)</p>
                <div className='sensor'>
                    <Link to='/NewSensor'>
                        <span className='float-right addSensor'><Icon.PlusLg /></span></Link>
                    <span onClick={handleSensor} className='float-right sensor'><Icon.ChevronDown /></span>
                    {showSensor && <SensorComponent />}
                    {/* <SensorComponent/>
                    <SensorComponent/>
                    <SensorComponent/> */}
                </div>
        
                <div className='forecast'>
                <Precipitation />
                </div>
                
                <div className='forecast'>
                <Precipitation />
                   
                </div>
            </div>
        </div>
    )
}

export default PageWithStatistics