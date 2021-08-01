import './App.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import CloseIcon from '@material-ui/icons/Close';
import About from "./About/About.jsx"
import Home from "./Home/Home.jsx"
import Destination from "./Destination/Destination"
import Contact from "./Contact/Contact"
import { gsap } from "gsap";
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import {Switch,Route,NavLink} from "react-router-dom";
function App() {
  let comp=useRef()
let nav=useRef()
useEffect(()=>{
gsap.from(".header",{
  opacity:0,
  delay:1,
  duration:.6
})
  },[])
  let [menu,setmenu]=useState(true)
  function showMenu(){
  setmenu(false)
gsap.to(".header",{
    x:"-310px",
    })
  gsap.to(".nav-item",{
        x:"0px"
  },)
 }
  function HideMenu(){
    setmenu(true)
   gsap.to(".header",{
      x:"0px"
    })
    gsap.to(".nav-item",{
          x:"400px",
          delay:.1
    })
  }
   return (
<>
<div className="whole-container" ref={comp}>
    <div className="header">
  <h1>Travel </h1>
    {menu &&  <MenuSharpIcon className="hamburg" onClick={showMenu}/>}
    {menu || <CloseIcon className="hamburg" onClick={HideMenu}/>}
    </div>
  <div className="nav-item" ref={nav}>
  <ul>
  <li> <NavLink to="/" onClick={()=>HideMenu()} className="menu-item">
    Home
     </NavLink></li>
  <li> <NavLink to="/about" onClick={()=>HideMenu()} className="menu-item">
    About Us
     </NavLink></li>
     <li><NavLink to="/destination" onClick={()=>HideMenu()} className="menu-item">
          Destination
     </NavLink></li>
     <li> <NavLink to="/contact" onClick={()=>HideMenu()} className="menu-item">
    Contact Us
     </NavLink></li>
     </ul>
     <div class="circle-box">
     <i class="uil uil-phone"></i>
     <h3>Contact a Travel Researcher</h3>
     </div>
    </div>
    <div className="component" id="comp">
    <Switch>
    <Route path="/destination">
      <Destination/>
      </Route>
      <Route path="/contact">
      <Contact/>
      </Route>
      <Route path="/about">
      <About/>
      </Route>
      <Route path="/">
    <Home
      />
</Route>
  </Switch>
    </div>
    </div>
    
   </>
  );
}

export default App;
