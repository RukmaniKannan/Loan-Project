import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import imgEbrain from "../../Assets/Screenshot 2024-11-07 120105.png";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="logins">
        <div style={{border:"1px solid #f0f0f0",boxShadow:"rgba(0, 0, 0, 0.25) 0px 4px 10px 0px"}} className='logo_ebrain' >
          <img src={imgEbrain} alt="logo" className='' />
        </div>
        <h4 className='mt-4'>Login</h4>
        <p>Welcome..!  Login</p>
        <div className="d-flex">
          <label className="form-label">Phone No</label>
          <input type="number" className='form-control shadow py-2' />
          <label className="form-label">Password</label>
          <input type="password" className='form-control shadow py-2' />
        </div>
        <div className='mt-4 mb-3'>
            <button type='submit' className='btn btn-success px-5 py-2'>LOGIN</button>
        </div>
        <span >New to Platform?<Link to="/register" style={{textDecoration:"none"}}> <span>Register</span></Link></span>

      </div>
    </div>
  );
};

export default Login;
