import { Button, Form, Input } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {signInAuthUserWithEmailAndPassword} from '../util/firebase/firebase.util'
// import { hideLoading, showLoading } from "../redux/alertsSlice";
// import logo from "../Assets/login-img.svg";
import logo from '../Assets/image/agino_logo.png'

function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      console.log(values.email, values.password);
      var user = await signInAuthUserWithEmailAndPassword(values.email, values.password)
      console.log(user)
    //   dispatch(showLoading());
    // console.log(values);
    //   const response = await axios.post("http://localhost:5000/api/user/login", values);
    //   dispatch(hideLoading());
    //   if (response.data.success) {
        // toast.success(response.data.message);
        // toast.success("response.data.message");
        
      
      localStorage.setItem("token", user);
        // localStorage.setItem("token", 'https://63bdda61e348cb076204aebb.mockapi.io/api/v1/users');
        navigate("/homepage");
    //   } else {
        // toast.error(response.data.message);
    //   }
    } catch (error) {
    //   dispatch(hideLoading()); 
      toast.error("Something went wrong");
    }
  };

  return (
    <div className='first-container'>
      <div className="container ">
        <div className="column">
        <div>
            <img src={logo} />
          </div>
        </div>
        {/* <div className="parent_div"> */}
    <div className="second-div another--dd" style={{width: "100vw", height:"100vh", justifyContent: "center"}}>
      {/* <div className="authentication-form card p-3"> */}
        <h1 className="card-title" style={{display: 'flex', justifyContent: 'center'}}>Welcome Back</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          
          <Button className="primary-button my-2 full-width-button" htmlType="submit" style={{width: "100%", backgroundColor: '#20382F', color: 'white'}}>
            Sign In
          </Button><br/>

          <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          dont have an account? <Link to="/register" className="anchor mt-2">
             Sign Up
          </Link> 
          </div>
         
        </Form>
      </div>
    </div>
    </div>
    // </div>
    // </div>
  );
}

export default Login;
