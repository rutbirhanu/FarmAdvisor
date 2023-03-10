

import "./onboarding.css"

import PageSubheader from '../headers/pagesubheader'
import logo from '../Assets/image/agino_logo.png'

import axios from "axios";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {createAuthUserWithEmailAndPassword} from '../util/firebase/firebase.util'


const Register = () => {
  // const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!phone || !password) 

    {
      setError("All fields are required");
      return;
    }
    setIsLoading(true);
    try {
      // const response = await axios.post("https://63bdda61e348cb076204aebb.mockapi.io/api/v1/users", { name, email, password });
      // const response= await axios.post('https:/localhost:7086/users/signup/',{  phone })
      // // check if response is successful
      // if (response.status === 201) {
      //   console.log("Successfully saved to database");
      //   history("/");
      // }
      var user = await createAuthUserWithEmailAndPassword(phone, password);
      // console.log(user.user.accessToken);
      localStorage.setItem("token", user.user.accessToken);
      history("/login");
    } catch (error) {
      setError("Error while Registering the user");
    }
    setIsLoading(false);
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
        <div className='second-div'></div>
        <form onSubmit={handleSubmit}>
          {error && <div>{error}</div>}
          {/* <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div> */}

          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          {isLoading ? (
            <div>saving...</div>
          ) : (



            <div className='bt' style={{ marginTop: '55%' }}>

              <button className='button' style={{ marginLeft: '3em' }}>CONTINUE</button>
            </div>
          )}
        </form>
      </div>


    </div>
  );
};

export default Register;

