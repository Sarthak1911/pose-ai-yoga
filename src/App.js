import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Hero from "./components/Hero";
import Learn from "./components/Learn";
import Practice from "./components/Practice";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/signup" element = {<Signup />}/>
          <Route path="/hero" element = {<Hero />}/>
          <Route path="/hero/learn" element = {<Learn />}/>
          <Route path="/hero/practice" element = {<Practice />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
