import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import React from "react";
import "./Sign.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import two from "./two.png";

function SignIn() {
  return (
    <div>
      <section className="vh-100">
        <h6 id="dddddddddd">
          Already have an account?&nbsp;&nbsp; <Link to={"/signin"}>Login</Link>
        </h6>
        <div className="container-fluid h-custom" id="yyyyy">
          <div
            className="row d-flex justify-content-center align-items-center h-100"
            id="peopo"
          >
            <div className="col-md-9 col-lg-6 col-xl-5" id="ttttttt">
              <img
                src="https://minimal-kit-react.vercel.app/static/illustrations/illustration_register.png"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div id="dafghd">
              <form id="skiiiii">
                <h4 id="hh">Get started absolutely free.</h4>
                <p
                  className="lead fw-normal mb-0 me-3"
                  style={{ marginTop: "10px" }}
                  id="jhjhhh"
                >
                  Free forever. No credit card needed.
                </p>
                <div
                  className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
                  style={{ marginTop: "20px" }}
                >
                  <Button
                    variant="outlined"
                    id="oiwro"
                    style={{ margin: "10px", color: "red" }}
                  >
                    <GoogleIcon />
                  </Button>

                  <Button
                    variant="outlined"
                    id="oiwro"
                    style={{ margin: "10px", color: "rgb(24, 119, 242)" }}
                  >
                    <FacebookIcon />
                  </Button>

                  <Button
                    variant="outlined"
                    id="oiwro"
                    style={{ margin: "10px", color: "rgb(24, 119, 242)" }}
                  >
                    {" "}
                    <TwitterIcon />
                  </Button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0" id="jjjj">
                    OR
                  </p>
                </div>
                <div className="form-outline mb-4">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    label="First Name..."
                    variant="outlined"
                    id="sdf"
                    placeholder="First Name..."
                  />

                  <TextField
                    id="outlined-basic"
                    type="text"
                    label="Last Name..."
                    variant="outlined"
                    id="sdf"
                    sx={{ marginLeft: "20px" }}
                    placeholder="Last Name..."
                  />
                </div>

                <div className="form-outline mb-4">
                  <TextField
                    id="outlined-basic"
                    type="email"
                    label="E-mail..."
                    variant="outlined"
                    placeholder="E-mail..."
                  />
                </div>
                <div className="form-outline mb-3">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-success"
                    id="jlfidfil"
                  >
                    Block level button
                  </button>
                  <p id="ssssssss">
                    By registering, I agree to Minimal Terms of &nbsp;
                    <a href="#">Service and Privacy Policy.</a>{" "}
                  </p>
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
    </div>
  );
}

export default SignIn;
