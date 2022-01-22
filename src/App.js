import "./App.css";
import Bodyy from "./Bodyy";
import SideBar from "./SideBar/SideBar";
import Header from "./Main_Ui/Header/Header";
import Colapsed from "./Collapsed/Colapsed";
import Products from "./Products/Products";
import Blog from "./Blog/Blog";
import Ahgjvdg from "./Collapsed/Ahgjvdg";
import SignUp from "./SignIn.js/SignUp";
import SignIn from "./SignIn.js/SignIn";
import PageNotFound from "./SignIn.js/PageNotFound";
import Test from "./Test";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Grid } from "@mui/material";

function App() {
  return (
    
    <div>
    <Router>
      <Routes>
      <Route exact path="/" element={
      <div className="Main">
        <div className="sidebar">
        <SideBar/>
        </div>
        <div className="body" >
      
          <Bodyy />
        </div>
      </div>}/>
      <Route exact path="/product" element={ 
      <div className="Main">
        <div  className="sidebar">
        <SideBar/>
        </div>
        <div className="body">
          <Products />
        </div>
      </div>}/>
      <Route exact path="/blog" element={ 
      <div className="Main">
        <div className="sidebar">
        <SideBar/>
        </div>
        <div exact className="body">
          <Blog />
        </div>
      </div>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/signin" element={<SignIn/>}/>
      <Route exact path="/404" element={<PageNotFound/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  
    </div>
  );
}

export default App;
