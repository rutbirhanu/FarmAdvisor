import React from 'react'
import AppHeader from '../../headers/appheader'
import PageSubheader from '../../headers/pagesubheader'
import "../homepageStyle.css"
import landscape from "../../image/landscape.png"
import SensorComponent from '../../components/sensor_component'
import "../../components/component.css"

function PageWithStatistics() {
    return (
        <div >
            <AppHeader />
            <PageSubheader title="Field Name" />
            <div className='parent_div' style={{ marginTop: "4rem" }}>

                <img src={landscape} />
                <p style={{marginLeft:"2rem" , marginTop:"-1.2rem"}}>127m above sea level</p>
                <div className='GDD-container'>
                    <span>
                        <h3>384</h3>
                        <p className='light-txt' style={{marginLeft:"-16px"}}>Current GDD</p>
                    </span>
                    <span>
                        <h3>384</h3>
                        <p className='light-txt' style={{marginLeft:"-16px"}}>GDD Goal</p>
                    </span>
                    <span>
                        <h3>384</h3>
                        <p className='light-txt' style={{marginLeft:"-16px"}}>To cutting </p>
                    </span>
                </div>
                <p className='light-txt' style={{ margin: "-16px 0 0 -17px" }}>Last sensor reset: 04/03/22 (auto reset)</p>
                <div className='sensor'>
                    <SensorComponent/>
                    <SensorComponent/>
                    <SensorComponent/>
                </div>
                <div className='forecast'>

                </div>
            </div>
        </div>
    )
}

export default PageWithStatistics