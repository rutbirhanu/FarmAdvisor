import React from 'react'
import { useState } from 'react'

import "./onboarding.css"
import PageSubheader from '../headers/pagesubheader'
import logo from '../Assets/image/agino_logo.png'
import { Link } from 'react-router-dom'
export default function Verify() {
    const [verify, setVerify] = useState("");

    const handleVerificationCode = (event) => {
        setVerify(event.target.value);
    };

    return (
        <div>
            <div className='first-container'>
                <div className='container'>
                    <div>
                        <img src={logo} />
                    </div>
                </div>
            </div>
            <PageSubheader title="SIGN UP" />
            <div className='parent_div'>
                <div className='second-div'>
                    <h1>Verification Code</h1>
                    <form>
                    
                        <div>
                            <label htmlFor="verify"></label>
                            <input
                                type="number"
                                id="verify"
                                value={verify}
                                onChange={handleVerificationCode}
                                placeholder="Enter your Verification Code"
                            />
                        </div>
                    </form>
                    <div  className='bt' style={{marginTop:'55%'}}>
                        <Link to='/homepage'>
                        <button className='button' style={{ marginLeft:'3em'}}>CONTINUE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
