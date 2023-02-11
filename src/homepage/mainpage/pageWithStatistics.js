import React, { useState } from 'react'
import AppHeader from '../../headers/appheader'
import PageSubheader from '../../headers/pagesubheader'
import "../homepageStyle.css"
import landscape from "../../image/landscape.png"
import SensorComponent from '../../components/sensor_component'
import "../../components/component.css"
import * as Icon from 'react-bootstrap-icons';

import { Forecast, Precipitation } from '../../components/wheather/Forecast'
function PageWithStatistics() {

    const [isExpanded, setIsExpanded] = useState(false);
  
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
                <div className=' row ms-8'>
                    <div className='col-md-4'>
                    <span className='float-left'>Sensor</span>
                        <span className='float-right newSensor '><Icon.PlusLg /></span>
                    <span className=' displaySensor' onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? (
                            <>
                                <Icon.ChevronUp />
                                <>
                                { <SensorComponent />}
                                </>
                                
                            </>
                        ) : (
                            <>
                                <Icon.ChevronDown />
                            </>
                        )}
                    </span>
                    </div>
                </div>

                

                
                    <Precipitation />
                

                    <Precipitation />

            </div>
        </div>
    )
}

export default PageWithStatistics