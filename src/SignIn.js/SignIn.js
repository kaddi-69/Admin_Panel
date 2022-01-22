import { Button } from '@mui/material';
import { TextField } from '@mui/material';

import React from 'react';
import './Sign.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import one from './one.png'

function SignIn() {
  return <div>
      <section className="vh-100" >
      <h6 id='dddddddddd'>Don’t have an account?&nbsp;&nbsp;<Link to={'/signup'}>Get started</Link></h6>
  <div className="container-fluid h-custom" id='yyyyy'>
    <div className="row d-flex justify-content-center align-items-center h-100" id='peopo'>
      <div className="col-md-9 col-lg-6 col-xl-5" id='ttttttt'>
        <img src='https://minimal-kit-react.vercel.app/static/illustrations/illustration_login.png' className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" id='dafghd'>

        <form id='skiiiii'>
        <h2>Sign in to Minimal</h2>
            <p className="lead fw-normal mb-0 me-3" style={{marginTop:'20px'}}>Enter your details below.</p>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start" style={{marginTop:'30px'}}>
           
            <Button variant="outlined" id='oiwro' style={{margin:'10px',color:"red"}}><GoogleIcon/></Button>

            <Button variant="outlined" id='oiwro'  style={{margin:'10px',color:"rgb(24, 119, 242)"}}><FacebookIcon/></Button>

            <Button variant="outlined" id='oiwro'  style={{margin:'10px',color:"rgb(24, 119, 242)"}}> <TwitterIcon/></Button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0" id='jjjj'>OR</p>
          </div>

          <div className="form-outline mb-4">
          <TextField id="outlined-basic" label="E-mail..." variant="outlined" placeholder='E-mail...'/>
          </div>

          <div className="form-outline mb-3">
          <TextField id="outlined-basic" label="Password"  type="password" variant="outlined" />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body" id='wioo'>Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
          <button type="button" className="btn btn-primary btn-lg btn-success" id='jlfidfil'>Block level button</button>
          </div>

        </form>
      </div>
    </div>
  </div>
  {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <div className="text-white mb-3 mb-md-0">
    </div>
 
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div> */}
</section>
  </div>;
}

export default SignIn;
