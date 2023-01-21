
import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import logo from '../../Assets/Vector.png';
import { ToggleSensor } from './dropdown/sensortoggle';
import Popup from 'reactjs-popup';
import './sensor.css';
export const Sensor = () => {
    const data = [
        {
            sNumber: '998766555',
            GDD: '677 Recent added gdd',
        },
        {
            sNumber: '998766555',
            GDD: '677',
        },
        {
            sNumber: '998766555',
            GDD: '677',
        },
        {
            sNumber: '998766555',
            GDD: '677',
        },
        {
            sNumber: '998766555',
            GDD: '677',
        },
        {
            sNumber: '998766555',
            GDD: '677',
        },
    ]
    return (
        <>
            {data.map((value, key) => {
                return (
                    <div className='row'>
                        <div className='col-md-4 '>
                            <div className='card' key={key}>
                                <div className='row'>
                                    <div className='card-title'>
                                        <img src={logo} style={{width:'20%',marginLeft:'1.5em'}}/>
                                        <span className='addSensor float-right'> <Popup trigger={<Icon.ThreeDotsVertical />} position='right top'>
                                            <ToggleSensor />
                                        </Popup></span>

                                    </div>
                                </div>
                                <div className='card-body'>
                                    <p className='card-text'>{value.sNumber}</p>
                                    <p className='card-text'>{value.GDD} </p>
                                </div>
                                
                                    
                                
                            </div>
                        </div>

                    </div>
                )

            })}
        </>
    );
}