import React, { useState } from 'react';
import socialDesktop from '../images/twitter.png';
import './login.css'
import './loading.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
const [user, setuser] = useState({ name: "", email: "", username: "", password: "" });
const [loading, setloading] = useState(false);
const navigate = useNavigate();
 
const submithandle = async (e) => {
  e.preventDefault();
  setloading(true);
  try {
    const response = await axios.post(`${API_BASE_URL}/user/register`, user);
    console.log(response);
    if (response.status === 201) {
      setuser({ name: "", email: "", username: "", password: "" });
      setloading(false);
      toast.success(response.data.result.message);
      navigate("/login");
    }
  } catch (error) {
    console.log(error);
    setloading(false);
    toast.error(error.response.data.error);
  }
}


  return (
    <div className='main-container'>
    <div class="Logincard">
      <div class="first-content">
        <span><img src={socialDesktop} alt='twitter'></img></span>
      </div>
      <div class="second-content">
        <div class="form-container">
          <p>Register</p>
          {loading ? <div class="banter-loader">
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
              </div> : ""}
          <form class="form" onSubmit={submithandle}>
          <label>Full Name</label>
            <input type="text" class="input" placeholder="Enter yout Full Name" value={user.name} onChange={(e) => setuser({ ...user, name: e.target.value })} />
            <label>Email</label>
            <input type="text" class="input" placeholder="Enter yout email" value={user.email} onChange={(e) => setuser({ ...user, email: e.target.value })}  />
            <label>User Name</label>
            <input type="text" class="input" placeholder="Enter yout User Name" value={user.username} onChange={(e) => setuser({ ...user, username: e.target.value })} />
            <label>Password</label>
            <input type="password" class="input" placeholder="Password" value={user.password} onChange={(e) => setuser({ ...user, password: e.target.value })} />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer/>
  </div>
  )
}

export default Register;