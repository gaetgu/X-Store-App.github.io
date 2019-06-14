import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "../logo.svg"

function goHome(){
	window.location = "https://graviton.ml";
}

function Navbar(){
  return (
    <div className="navbar">
    	<img  alt="Graviton"  onClick={goHome} className="logo exclude" src={Logo}/>
   	 	<Link to="/">Home</Link>
      <Link to="/docs/">Docs</Link>
      <Link to="/download/">Download</Link>
      <Link to="/contribute/">Contribute</Link>
      <Link to="/contact/">Contact</Link>
      <span className="exclude">1.0.1 - Beta</span>
    </div>

  );
}

export default Navbar;