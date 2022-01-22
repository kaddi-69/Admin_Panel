import React from "react";
import ApexChartY from "./Charts/OnceMore";
import ApexCharttt from "./Charts/Bar";
import Apppp from "./Charts/Radar";
import ApexCharts from "./Charts/ApexCharts";
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import PestControlIcon from '@mui/icons-material/PestControl';
import WindowIcon from '@mui/icons-material/Window';
import Header from "./Main_Ui/Header/Header";
import "./Bodyy.css";

import Example from "./SideBar/Example";

function Bodyy() {
  return (
    <div>
          <Header/>
      <h1 style={{marginLeft:"30px",marginTop:"30px"}}><Example/></h1>
      <div className="container">
        <div className="row" id="one">
          <div className="desine">
          <AdbIcon/>
          </div>
          <h2>714k</h2>
          <h3>Weekly Sales</h3>
        </div>
        <div className="row" id="two">
          <div className="desine">
          <AppleIcon/>
          </div>
          <h2>1.35m</h2>
          <h3>New Users</h3>
        </div>
        <div className="row" id="three">
          <div className="desine">
          <WindowIcon/>
          </div>
          <h2>1.72m</h2>
          <h3>Item Orders</h3>
        </div>
        <div className="row" id="four">
          <div className="desine">
          <PestControlIcon/>
          </div>
          <h2>234</h2>
          <h3>Bug Reports</h3>
        </div>
      </div>
      <div className="MainflexG">
        <div className="graphOne">
          <div className="gOne">
            <ApexCharttt />
          </div>
          <div className="gTwo">
            <ApexChartY />
          </div>
        </div>
        <div className="graphTwo">
          <div className="gThree">
            <Apppp />
          </div>
          <div className="gFour">
            <ApexCharts />
          </div>
        </div>
      </div>
      <div className="last">
        <div className="graphThree">
          <div className="llleft">
            <h2>Order Timeline</h2>

            <div className="leftGraph">
              <div className="img">
                <img
                  src="https://delivery.twentythree.com/10326378/61343046/large?revision=3&domain=video.tomra.com&Expires=1642500000&Signature=fpvVhAnURO5MV1veIb4oBiVKTnVn8DFjr1lJ2TXsfjt4oupHzfv5KjCYUVeAcHfBlEve3%7e7RLAah8cqg%2dOBTqtEsy1g45xB1N%7e%7eDId2lzBmDyceRNsb7pjcVxuNzDp1TRc%7eWdl1NY3B0eoCTyr5ch%7e3xDdcjEwrTwKDNIaKsyX1NryLdcIRdUftehI2hiODdLIbnWbjKMgyYxCuPsjAQFGitI%7eiguN9dERtNHsWxNRxhRHLj4huJu%7egMz1DtOPw87pJ5VoOnAIamA6Vf3RJleCqUtTnjDLNAzp3rBcc3BuVpZ5bCkRmJ2coYfIjVdLWmUdVIwcvj3tqA8IWplBv2%7ew%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB"
                  style={{
                    height: "38px",
                    borderRadius: "4px",
                    marginTop: "7px",
                  }}
                />
              </div>
              <p>
                <a
                  style={{
                    fontWeight: "600",
                    lineHeight: "1.57143",
                    fontSize: "0.875rem",
                    marginBottom: "7px",
                    color: "black",
                  }}
                >
                  Customer Factory Executive
                </a>
                <br />
                Voluptatem neque neque inventore quia. Ut reprehenderit
                ducimu...
              </p>
              <div className="time">
                <small>about 19 hours</small>
              </div>
            </div>
            <div className="leftGraph">
              <div className="img">
                <img
                  src="https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_1.jpg"
                  style={{
                    height: "38px",
                    borderRadius: "4px",
                    marginTop: "7px",
                  }}
                />
              </div>
              <p>
                <a
                  style={{
                    fontWeight: "600",
                    lineHeight: "1.57143",
                    fontSize: "0.875rem",
                    marginBottom: "7px",
                    color: "black",
                  }}
                >
                  Customer Factory Executive
                </a>
                <br />
                Hic vero possimus. Possimus sit sed nihil ad non sunt omnis
                ea...
              </p>
              <div className="time">
                <small>about 10 hours</small>
              </div>
            </div>
            <div className="leftGraph">
              <div className="img">
                <img
                  src="https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_2.jpg"
                  style={{
                    height: "38px",
                    borderRadius: "4px",
                    marginTop: "7px",
                  }}
                />
              </div>
              <p>
                <a
                  style={{
                    fontWeight: "600",
                    lineHeight: "1.57143",
                    fontSize: "0.875rem",
                    marginBottom: "7px",
                    color: "black",
                  }}
                >
                  Customer Factory Executive
                </a>
                <br />
                Quia qui ea quaerat repudiandae est id voluptate. Qui culpa
                ipsa....
              </p>
              <div className="time">
                <small>about 23 hours</small>
              </div>
            </div>
            <div className="leftGraph">
              <div className="img">
                <img
                  src="https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_3.jpg"
                  style={{
                    height: "38px",
                    borderRadius: "4px",
                    marginTop: "7px",
                  }}
                />
              </div>
              <p>
                <a
                  style={{
                    fontWeight: "600",
                    lineHeight: "1.57143",
                    fontSize: "0.875rem",
                    marginBottom: "7px",
                    color: "black",
                  }}
                >
                  Customer Factory Executive
                </a>
                <br />
                Alias aut velit velit aut. Rerum voluptatem voluptatem nihil sed
                n...
              </p>
              <div className="time">
                <small>about 35 hours</small>
              </div>
            </div>
            <div className="leftGraph" id="hsgdfyh">
              <div className="img">
                <img
                  src="https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg"
                  style={{
                    height: "38px",
                    borderRadius: "4px",
                    marginTop: "7px",
                  }}
                />
              </div>
              <p>
                <a
                  style={{
                    fontWeight: "600",
                    lineHeight: "1.57143",
                    fontSize: "0.875rem",
                    marginBottom: "7px",
                    color: "black",
                  }}
                >
                  Customer Factory Executive
                </a>
                <br />
                Error eveniet voluptate. Laboriosam doloribus inventore a vel
                fa...
              </p>
              <div className="time">
                <small>about 1 hours</small>
              </div>
            </div>
            <div className="leftGraph" id="dfdsfgfg">
              <button>View..</button>
            </div>
          </div>
        </div>
        <div className="graphFour">
          <h2>Order Timeline</h2>
          <div className="right">
            <div className="first">
              <div id="red"> </div>
              <div id="border"></div>
            </div>
            <div className="secounf">
              <h4>1983, orders, $4220</h4>
              <p>27 Mar 2021 19:45</p>
            </div>
          </div>
          <div className="right">
            <div className="first">
              <div id="green"> </div>
              <div id="border"></div>
            </div>
            <div className="secounf">
              <h4>12 Invoices have been paid</h4>
              <p>20 Mar 2021 14:45</p>
            </div>
          </div>
          <div className="right">
            <div className="first">
              <div id="seegreen"> </div>
              <div id="border"></div>
            </div>
            <div className="secounf">
              <h4>Order #37745 from September</h4>
              <p>28 Nov 2021 07:46</p>
            </div>
          </div>
          <div className="right">
            <div className="first">
              <div id="blue"> </div>
              <div id="border"></div>
            </div>
            <div className="secounf">
              <h4>New order placed #XF-2356</h4>
              <p>10 Jan 2022 02:13</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Lasst">
        <div className="MAin__Left">
          <h2>Traffic by Site</h2>
          <div className="left">
            <div className="Noe" id="break">
              <div className="breake">
                <div className="Make">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-meta"
                    viewBox="0 0 16 16"
                    style={{ color: "#043080d0" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"
                    />
                  </svg>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  67.74k
                </div>
                <div
                  style={{ color: "rgba(0, 0, 0, 0.281)", fontSize: "19px" }}
                >
                  Meta Verce
                </div>
              </div>
            </div>
            <div className="Noe" id="break">
              <div className="breake">
                <div className="Make">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-google"
                    viewBox="0 0 16 16"
                    style={{ color: "rgba(224, 34, 34, 0.664)" }}
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  83.07k
                </div>
                <div
                  style={{ color: "rgba(0, 0, 0, 0.281)", fontSize: "19px" }}
                >
                  Google
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="Noe" id="break">
              <div className="breake">
                <div className="Make">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    style={{ color: "#043080d0" }}
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  39.58k
                </div>
                <div
                  style={{ color: "rgba(0, 0, 0, 0.281)", fontSize: "19px" }}
                >
                  Linkedin
                </div>
              </div>
            </div>
            <div className="Noe" id="break">
              <div className="breake">
                <div className="Make">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    style={{ color: "#043080d0" }}
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  89.85k
                </div>
                <div
                  style={{ color: "rgba(0, 0, 0, 0.281)", fontSize: "19px" }}
                >
                  Twitter
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="righfft">
          <h2>Tasks</h2>
          <div className="MAo">
         <div id="hdjs"><input type='checkbox' onClick={()=>{}}/> Create FireStone Logo <br/></div> 
         <div id="hdsedtgjs"> <input type='checkbox'/> Add SCSS and JS files if required <br/></div>
         <div id="hdwaestysadfyhjs">  <input type='checkbox'/> Stakeholder Meeting<br/></div>
         <div id="hdfhdjs"><input type='checkbox'/> Scoping & Estimations<br/></div>
         <div id="hdsdgfjs">   <input type='checkbox'/> Sprint Showcase<br/></div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Bodyy;
