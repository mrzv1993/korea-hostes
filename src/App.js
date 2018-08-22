import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import Main from "./Main";
import Reviews from "./Reviews";
import Interview from "./Interview";
import Club from "./Photo/Club";
import Flat from "./Photo/Flat";

const Page = styled.div`
  min-width: 320px;
  height: 100%;
  overflow: hidden;
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
          <Route path="/form" component={Interview} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/photo/club" component={Club} />
          <Route path="/photo/flat" component={Flat} />
        </Page>
      </Router>
    );
  }
}

export default App;
