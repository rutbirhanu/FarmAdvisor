import React from 'react'
import { useState } from 'react'
import "./onboarding.css"
import PageSubheader from '../headers/pagesubheader'
import logo from '../Assets/image/agino_logo.png'
import { Link } from 'react-router-dom'
import  { useNavigate }  from 'react-router-dom';
export default function Verify() {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

    const [verificationCode, setVerificationCode] = useState("");
    const handleVerification = (event) => {
        event.preventDefault();
        if (!verificationCode) {
            setError("The verification code field is required");
            return;
        }
        setIsLoading(true);
        // Verify the code with the server
        // ...
        setIsLoading(false);
        // Save the user's phone number and country code to the database
        // ...
        navigate("/");
    };


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
                    {/* <form>

                        <div>
                            <label htmlFor="verify"></label>
                            <input
                                type="number"
                                id="verify"
                                value={verify}
                                onChange={handleVerificationCode}
                                placeholder="Enter your Verification Code"
                            />
                        </div> */}

                        {!isLoading && (
                            <form onSubmit={handleVerification}>
                                <div>
                                    <label htmlFor="verificationCode"></label>
                                    <input
                                        type="text"
                                        id="verificationCode"
                                        value={verificationCode}
                                        onChange={(e) => setVerificationCode(e.target.value)}
                                        placeholder="Enter your Verification Code"
                                    />
                                </div>

                                <div className='bt' style={{ marginTop: '55%' }}>
                                    <Link to='/homepage'>
                                        <button className='button' type='submit' style={{ marginLeft: '3em' }}>CONTINUE</button>
                                    </Link>
                                </div>

                            </form>
                        )}

            
                </div>
            </div>
        </div>
    )
}
