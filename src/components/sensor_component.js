import React from 'react'
import logo from "../image/Vector (1).png"
import dots from "../image/dots.png"

function SensorComponent({ GDD }) {
    return (
        <div className='sensor_parent_div'>
            <div className='inside'>
                <img src={logo} height="26" width="26" style={{marginRight:"7.5rem"}} />
            <img src={dots} style={{marginLeft:"8rem", marginTop:"-3.5rem"}} />

            </div>
            <p className='first-txt'>983958453958</p>
            <p className='light-txt'>{GDD}</p>

        </div>
    )
}

export default SensorComponent