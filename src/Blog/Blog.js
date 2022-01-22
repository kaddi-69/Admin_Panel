import React from "react";
import "./Blog.css";
import Transdgsition from "./Transdgsition";
import Searchh from "./Search";
import { Button } from "@mui/material";
import Header from '../Main_Ui/Header/Header'


function Blog() {
  const data = [
    {
      id: 1,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_4.jpg",
      title: "23 October 2021",
      para: " Six Socks Studio",
      message: "37.49k",
      messageOne: "94.82k",
      messageTwo: "51.28k",
    },
    {
      id: 2,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_5.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_5.jpg",
      title: "01 April 2021",
      para: " Fresh Prince",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 3,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_6.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_6.jpg",
      title: "18 September 2021",
      para: " vincenzo de cotiis’ crossing over showcases a research",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 4,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_7.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_5.jpg",
      title: "12 August 2021",
      para: " Simple, Great Looking Animations in Your Project ",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
  ];
  const zv = [
    {
      id: 5,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_8.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_8.jpg",
      title: "12 August 2021",
      para: " 40 Free Serif Fonts for Digital Designers",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 6,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_9.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_9.jpg",
      title: "12 August 2021",
      para: " Examining the Evolution of the Typical Web Design ",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 7,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_10.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_10.jpg",
      title: "12 August 2021",
      para: "Katie Griffin loves making that homey art",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 8,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_11.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_11.jpg",
      title: "12 August 2021",
      para: "The American Dream retold through mid-century",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
  ];
  const dugui = [
    {
      id: 9,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_16.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_15.jpg",
      title: "12 july 2022",
      para: "CarZio-Delivery Driver App SignIn/SignUp",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 10,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_17.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_16.jpg",
      title: "12 jan 2021",
      para: "Illustration System Design",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 11,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_22.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_15.jpg",
      title: "12 july 2022",
      para: "CarZio-Delivery Driver App SignIn/SignUp",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 12,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_21.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_16.jpg",
      title: "12 jan 2021",
      para: "Illustration System Design",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
  ];
  const dbgifb = [
    {
      id: 13,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_15.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_13.jpg",
      title: "12 August 2021",
      para: "Tylko Organise effortlessly -3D & Motion Design",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 14,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_14.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_14.jpg",
      title: "5 August 2011",
      para: "How to create a client-serverless Jamstack app",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 15,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_13.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_15.jpg",
      title: "12 july 2022",
      para: "CarZio-Delivery Driver App SignIn/SignUp",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
    {
      id: 5,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_12.jpg",
      avatar:
        "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_16.jpg",
      title: "12 jan 2021",
      para: "Illustration System Design",
      message: "46.64k",
      messageOne: "68.65k",
      messageTwo: "99.73k",
    },
  ];

  return (
    <>
      <Header/>
      <div className="buttonn">
        <h2 style={{ fontSize: "1.5rem" }}>Blog</h2>
        <Button variant="contained" color="success" id="khdfg">
          + &nbsp; Create Post
        </Button>
      </div>
      <div className="seradn">
        <Searchh />
        <Transdgsition />
      </div>
      <div className="iutgdifnbv">
        <div className="jhvdfgjvdfhjj">
          <div className="hu">
            {" "}
            <div className="contenteee">
              <img
                src="https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_1.jpg"
                style={{
                  height: "40px",
                  borderRadius: "100px",
                  margin: "30px",
                }}
              />
              <div className="Opfirest">
                <h5 id="adfg">10 February 2021</h5>
                <h4 id="sdgjyygjhc">Designify Agency Landing Page Design</h4>
              </div>
              <div className="secusgtsyru">
                <div className="vafv">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat-dots-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                  &nbsp;&nbsp;<span>93.16k</span>
                </div>
                <div className="semsadfgmm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>{" "}
                  &nbsp;<span>39.31k</span>
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-share-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                  </svg>
                  &nbsp;&nbsp;<span>67.19k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jhvdfgjvdfhjjj">
          <div className="hu">
            {" "}
            <div className="contenteee">
              <div className="shjgdfyjhv">
                <img
                  src="https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_3.jpg"
                  style={{
                    height: "35px",
                    borderRadius: "100px",
                    margin: "30px",
                  }}
                />
                <div className="Opfirest">
                  <h5 id="adfg">10 February 2021</h5>
                  <h4 id="sdgjyygjhc">Designify Agency Landing Page Design</h4>
                </div>
                <div className="secusgtsyru">
                  <div className="vafv">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chat-dots-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    &nbsp;&nbsp;<span>93.16k</span>
                  </div>
                  <div className="semsadfgmm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>{" "}
                    &nbsp;<span>39.31k</span>
                    <br />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-share-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                    </svg>
                    &nbsp;&nbsp;<span>67.19k</span>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="jhvdfgjvdfhjjjj">
          <div className="hu">
            {" "}
            <div className="contenteee">
              <div className="shjgdfyjhv">
                <img
                  src="https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_2.jpg"
                  style={{
                    height: "35px",
                    borderRadius: "100px",
                    margin: "30px",
                  }}
                />
                <div className="Opfirest">
                  <h5 id="adfg">10 February 2021</h5>
                  <h4 id="sdgjyygjhc">Designify Agency Landing Page Design</h4>
                </div>
                <div className="secusgtsyru">
                  <div className="vafv">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chat-dots-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    &nbsp;&nbsp;<span>93.16k</span>
                  </div>
                  <div className="semsadfgmm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>{" "}
                    &nbsp;<span>39.31k</span>
                    <br />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-share-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                    </svg>
                    &nbsp;&nbsp;<span>67.19k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // */}

      <div className="udfgdusfgv">
        {dbgifb.map((e) => {
          return (
            <div className="supperdiv">
              <div className="subMain" key={e.id}>
                <div className="img">
                  <img src={e.src} id="src" />
                </div>
                <div className="circle"></div>
                <img src={e.avatar} className="circsdfsdfle" />
                <div className="flooter">
                  <div className="firest">
                    <h5>{e.title}</h5>
                    <h4>{e.para}</h4>
                  </div>
                  <div className="secuyru">
                    <div className="vv">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chat-dots-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      &nbsp;&nbsp;{e.message}
                    </div>
                    <div className="semmm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>{" "}
                      &nbsp;&nbsp;{e.messageOne}
                      <br />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-share-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                      </svg>
                      &nbsp;&nbsp;{e.messageTwo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {dugui.map((e) => {
          return (
            <div className="supperdiv">
              <div className="subMain" key={e.id}>
                <div className="img">
                  <img src={e.src} id="src" />
                </div>
                <div className="circle"></div>
                <img src={e.avatar} className="circsdfsdfle" />
                <div className="flooter">
                  <div className="firest">
                    <h5>{e.title}</h5>
                    <h4>{e.para}</h4>
                  </div>
                  <div className="secuyru">
                    <div className="vv">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chat-dots-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      &nbsp;&nbsp;{e.message}
                    </div>
                    <div className="semmm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>{" "}
                      &nbsp;&nbsp;{e.messageOne}
                      <br />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-share-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                      </svg>
                      &nbsp;&nbsp;{e.messageTwo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {data.map((e) => {
          return (
            <div className="supperdiv">
              <div className="subMain" key={e.id}>
                <div className="img">
                  <img src={e.src} id="src" />
                </div>
                <div className="circle"></div>
                <img src={e.avatar} className="circsdfsdfle" />
                <div className="flooter">
                  <div className="firest">
                    <h5>{e.title}</h5>
                    <h4>{e.para}</h4>
                  </div>
                  <div className="secuyru">
                    <div className="vv">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chat-dots-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      &nbsp;&nbsp;{e.message}
                    </div>
                    <div className="semmm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>{" "}
                      &nbsp;&nbsp;{e.messageOne}
                      <br />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-share-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                      </svg>
                      &nbsp;&nbsp;{e.messageTwo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {zv.map((e) => {
          return (
            <div className="secoundDiv">
              <div className="subMain" key={e.id}>
                <div className="img">
                  <img src={e.src} id="src" />
                </div>
                <div className="circle"></div>
                <img src={e.avatar} className="circsdfsdfle" />
                <div className="flooter">
                  <div className="firest">
                    <h5>{e.title}</h5>
                    <h4>{e.para}</h4>
                  </div>
                  <div className="secuyru">
                    <div className="vv">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chat-dots-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      &nbsp;&nbsp;{e.message}
                    </div>
                    <div className="semmm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>{" "}
                      &nbsp;&nbsp;{e.messageOne}
                      <br />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-share-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                      </svg>
                      &nbsp;&nbsp;{e.messageTwo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Blog;
