import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import Transition from "./Transition";
import TransitionTwo from "./TransitionTwo";
import TransitionThree from "./TransitionThree";
import Search from './Search'
import Icon from './Icon'


function Header() {
  return (
    <div className="Header__main">
     

      {/* <---Header---> */}

      <div className="open__bar1">
        <Search />
        <div className="sufbi">
          <TransitionThree />
          <Transition />
          <TransitionTwo />
          <div className="icon">
           <Icon/>
          </div>
        </div>
      </div>
      {/* <KSDBG/> */}
    </div>
  );
}

export default Header;
