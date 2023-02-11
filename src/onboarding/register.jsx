import React from 'react'
import { useState } from 'react'
import dropdown from "../image/dropdown.png"
import "./onboarding.css"
import AppHeader from '../headers/appheader'
import PageSubheader from '../headers/pagesubheader'
import logo from '../image/agino_logo.png'
import { Link } from 'react-router-dom'
export default function Register() {

    const countryCodes = [
        { code: "+1", label: "USA" },
        { code: "+44", label: "UK" },
        { code: "+33", label: "France" },
        { code: "+251", label: "Ethiopia" },
        { code: "+252", label: "Somalia" },
        { code: "+253", label: "Djibouti" },
        { code: "+249", label: "Kenya" },
    ];
    const [selectedCode, setSelectedCode] = useState("+1");
    const [phone, setPhone] = useState("");

    const handleCodeChange = (event) => {
        setSelectedCode(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
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
                    <form>
                        <div>
                            <label htmlFor="country-code"></label>
                            <select
                                id="country-code"
                                value={selectedCode}
                                onChange={handleCodeChange}
                            >
                                {countryCodes.map((code) => (
                                    <option key={code.code} value={code.code}>
                                        {code.label}    ({code.code})
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="phone"></label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder="Enter your phone number"
                            />
                        </div>
        
                    </form>
                    <div  className='bt' style={{marginTop:'55%'}}>
                        <Link to='/verify'>
                        <button className='button' style={{ marginLeft:'3em'}}>CONTINUE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
