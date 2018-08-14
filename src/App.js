import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import Main from "./Main";
import Form from "./Form";

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
          <Route exact path="/" component={Main} />
          <Route path="/form" component={Form} />
        </Page>
      </Router>
    );
  }
}

export default App;
