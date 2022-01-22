import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import WindowIcon from "@mui/icons-material/Window";
import PestControlIcon from "@mui/icons-material/PestControl";
import "./Body.css";

function Body() {
  return (
    <div>
      <h1>Hi, Welcome back</h1>

      <div className="container">
        <div className="roww" id="one">
          <div className="desine">
            <AdbIcon />
          </div>
          <h2>714k</h2>
          <h3>Weekly Sales</h3>
        </div>
        <div className="roww" id="two">
          <div className="desine">
            <AppleIcon />
          </div>
          <h2>1.35m</h2>
          <h3>New Users</h3>
        </div>
        <div className="roww" id="three">
          <div className="desine">
            <WindowIcon />
          </div>
          <h2>1.72m</h2>
          <h3>Item Orders</h3>
        </div>
        <div className="roww" id="four">
          <div className="desine">
            <PestControlIcon />
          </div>
          <h2>234</h2>
          <h3>Bug Reports</h3>
        </div>
      </div>
      <div className="MainflexG">
        <div className="gOne">
          <ApexCharttt />
        </div>
        <div className="gTwo">
          <ApexChartY />
        </div>
        <div className="gThree">
          <Apppp />
        </div>
        <div className="gFour">
          <ApexCharts />
        </div>
      </div>
    </div>
  );
}

export default Body;
