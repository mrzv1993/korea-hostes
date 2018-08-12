import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Nav from "./Nav";
import Header from "./Header";
import About from "./About";
import Care from "./Care";
import Salary from "./Salary";
import Demands from "./Demands";
import Review from "./Review";

const Page = styled.div`
  min-width: 320px;
  height: 100%;
`;

const App = () => (
  <Router>
    <Page>
      <Nav />
      <Header />
      <About />
      <Care />
      <Demands />
      <Salary />
      <Review />
    </Page>
  </Router>
);
export default App;
