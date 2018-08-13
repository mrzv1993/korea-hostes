import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from "./Nav";
import Header from "./Header";
import About from "./About";
import Care from "./Care";
import Demands from "./Demands";
import Review from "./Review";

const Page = styled.div`
  min-width: 320px;
  height: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 1000,
      easing: "ease-out"
    });
  }
  render() {
    return (
      <Router>
        <Page>
          <Nav />
          <Header />
          <About />
          <Care />
          <Demands />
          <Review />
        </Page>
      </Router>
    );
  }
}

export default App;
