import React from 'react'
import logo from "../Assets/image/Vector (1).png"
import dots from "../Assets/image/dots.png"
import { ToggleSensor } from '../components/sensortoggle'
import Popup from 'reactjs-popup'
import * as Icon from 'react-bootstrap-icons'
const SensorComponent = ({ GDD }) => {
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
       
            <div className='sensor_parent_div displaySensor'>
                <div className='inside' >
                    <img src={logo} height="26" width="26" style={{ marginRight: "7.5rem" }} />
                    {/* <img src={dots} style={{ marginLeft: "8rem", marginTop: "-3.5rem" }} /> */}
                    <span style={{ marginLeft: "8rem", marginTop: "-3.5rem" }}> <Popup trigger={<Icon.ThreeDotsVertical />} position='right top'>
                        <ToggleSensor />
                    </Popup></span>
                </div>
                <p className='first-txt'>766663</p>

                <p className=''>{GDD}</p>
            </div>

            <div className='sensor_parent_div displaySensor'>
                <div className='inside' >
                    <img src={logo} height="26" width="26" style={{ marginRight: "7.5rem" }} />
                    {/* <img src={dots} style={{ marginLeft: "8rem", marginTop: "-3.5rem" }} /> */}

                    <span> <Popup trigger={<Icon.ThreeDotsVertical />} position='right top'>
                        <ToggleSensor />
                    </Popup></span>


                </div>
                <p className='first-txt'>766663</p>

                <p className=''>{GDD}</p>
            </div>
            <div className='sensor_parent_div displaySensor'>
                <div className='inside' >
                    <img src={logo} height="26" width="26" style={{ marginRight: "7.5rem" }} />
                    <img src={dots} style={{ marginLeft: "8rem", marginTop: "-3.5rem" }} />
                    <span style={{ marginLeft: "8rem", marginTop: "-3.5rem" }}> <Popup trigger={<Icon.ThreeDotsVertical />} position='right top'>
                        <ToggleSensor />
                    </Popup></span>
                </div>
                <p className='first-txt'>766663</p>

                <p className=''>{GDD}</p>
            </div>
        </>
    )
}

export default SensorComponent