import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from "../Nav";
import Header from "./Header";
import About from "./About";
import Care from "./Care";
import Demands from "./Demands";
import Salary from "./Salary";
import Steps from "./Steps";
import Review from "./Review";
import Mail from "./Mail";

const Main = () => (
  <div>
    <Nav />
    <Header />
    <About />
    <Care />
    <Demands />
    <Salary />
    <Steps />
    <Review />
    <Mail />
  </div>
);
export default Main;
