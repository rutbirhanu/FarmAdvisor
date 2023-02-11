import React, { useState } from 'react';
import './weather.css';
import AppHeader from '../../headers/appheader';
import PageSubheader from '../../headers/pagesubheader';
import landscape from '../../Assets/landscape.png';
import { Forecast, Precipitation } from './Forecast';
import * as Icon from 'react-bootstrap-icons';
import './sensor.css'
import { Link } from 'react-router-dom';
import { Sensor } from './Sensor';
const Weather = () => {
    const [showSensor, setshowSensor] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const handleSensor = () => {
        setshowSensor(current => !current) && <Icon.ChevronUp />
    }

    return (
        <div>
            <AppHeader />
            <PageSubheader title="Field Name two" />
            {/* <div className='container'> */}
            <div className='weatherdiv'>
                <div className='landscape mt-2 ms-4'>
                    <span><img src={landscape} alt='land scape' /> 127m above sea level</span>
                </div>
                <div className='row GDD mt-2'>
                    <div className='col currentgdd ms-5'>
                        <div className='row '>
                            <h4>367</h4>
                        </div>
                        <div className='row'><p>current GDD</p></div>
                    </div>

                    <div class="vl" ></div>


                    <div className='col gddgoal'>
                        <h4>765</h4>
                        <p>gdd goal </p>
                    </div>
                    <div className='vl'></div>

                    <div className='col'>
                        <span><h4 style={{ display: 'inline' }}>5</h4>days</span>
                        <p>To cutting </p>
                    </div>
                    <p
                        style={{ color: ' #979797' }}
                        className='mt-2'
                    >Last sensor reset :04/02/22 (auto reset)</p>
                </div>
                <div className='row ms-3 mt-5'>
                    <div className='col-md-12 '>
                        <span className='ms-3 float-left'>Sensor</span>
                        <Link to='/NewSensor'>
                            <span className='float-right addSensor'><Icon.PlusLg /></span></Link>

                     
                        <span onClick={handleSensor} className='float-right sensor'><Icon.ChevronDown /></span>
                        {showSensor && <Sensor />}
                        <button onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? (
                                <FontAwesomeIcon icon={faAngleUp} />

                            ) : (
                                <FontAwesomeIcon icon={faAngleDown} />
                            )}</button>
                    </div>
                </div>
                <Forecast />
                <Precipitation />
            </div>

        </div>
    );

}

export default Weather;