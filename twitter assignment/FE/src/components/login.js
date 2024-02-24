import React, { useState } from 'react';
import socialDesktop from '../images/twitter.png';
import './login.css';
import './loading.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [user, setuser] = useState({ email: "", password: "" });
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, user);
      console.log(response)
      if (response.status === 200) {
        localStorage.setItem("token", response.data.result.token);
        localStorage.setItem("user", response.data.result.user.email);
        setuser({ email: "", password: "" });
        setloading(false);
        toast.success(response.data.result.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error)
      setloading(false)
      toast.error(error.response.data.error);
    }
  }


  return (
    <>
      <div className='main-container'>
        <div class="Logincard">
          <div class="first-content">
            <span><img src={socialDesktop} alt='twitter'></img></span>
          </div>
          <div class="second-content">
            <div class="form-container">
              <p>Login</p>
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
              <form class="form" onSubmit={submithandler}>
                <label>Email</label>
                <input type="text" class="input" placeholder="Enter yout email" value={user.email} onChange={(e) => setuser({ ...user, email: e.target.value })} />
                <label>Password</label>
                <input type="password" class="input" placeholder="Password" value={user.password} onChange={(e) => setuser({ ...user, password: e.target.value })} />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login;