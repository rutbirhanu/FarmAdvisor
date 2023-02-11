import React from 'react'
import { useState } from 'react'
import dropdown from "../image/dropdown.png"
import "./onboarding.css"
import Input, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import 'react-phone-number-input/style.css';
import AppHeader from '../headers/appheader'
import PageSubheader from '../headers/pagesubheader'
import logo from '../image/agino_logo.png'
import { Link } from 'react-router-dom'
export default function Register() {


    const [phone, setPhone] = useState("");


    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const CountrySelect = ({ value, onChange, labels, ...rest }) => (
        <select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
          <option value="">{labels.ZZ}</option>
          {getCountries().map((country) => (
            <option key={country} value={country}>
              {labels[country]} + {getCountryCallingCode(country)}
            </option>
          ))}
        </select>
      );
 
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
                            <label htmlFor="countrySelect"></label>
                           
                            <CountrySelect labels={en} name="countrySelect" />
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
