import { useNavigate } from "react-router-dom";
import PageSubheader from "../headers/pagesubheader";
import logo from '../Assets/image/agino_logo.png'
import React, { useState, useEffect } from 'react';

function SignIn() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const history = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuthenticated(true);
        }
    }, []);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone, password }),
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem("token", data.token);
                setAuthenticated(true);
                history.push("/profilePage"); // Redirect to profile page
            } else {
                setErrorMsg(data.message);
            }
        } catch (error) {
            console.log(error);
            setErrorMsg("Something went wrong. Please try again later.");
        }
    };

    const handleSignOut = () => {
        localStorage.removeItem("token");
        setAuthenticated(false);
    };

      if (authenticated) {
        return (
          <div>
            <p>You are already signed in.</p>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        );
}

return (
    <div>
        <div className='first-container'>
            <div className='container'>
                <div>
                    <img src={logo} />
                </div>
            </div>
        </div>
        <PageSubheader title="SIGN In" />
        <div className='parent_div'>
            <div className='second-div'>
                <h1>Sign In</h1>

                <form onSubmit={handleSignIn}>
                    <label htmlFor="phone"></label>
                    <input
                        type="text"
                        placeholder="Eter your phone number"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='bt' style={{ marginTop: '35%' }}>

                        <button className='button' style={{ marginLeft: '3em' }}>Sign In</button>
                    </div>
                </form>

                {errorMsg && <p>{errorMsg}</p>}
            </div>
        </div>
    </div>
);

  
  }
export default SignIn;