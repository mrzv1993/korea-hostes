import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import oneFlat from "./one-flat.jpeg";
import twoFlat from "./two-flat.jpeg";
import threeFlat from "./three-flat.jpeg";
import fourFlat from "./four-flat.jpeg";
import fiveFlat from "./five-flat.jpeg";

const Wrapper = styled.div`
  background-color: #fff5f5;
  color: #685580;
  text-align: center;
  padding-bottom: 32px;
`;

const Photo = styled.img`
  width: 100%;
  margin-top: 32px;
`;

const MyLink = styled(Link)`
  color: #6869f4;
  font-weight: 600px;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  transition: 0.4s ease-in-out;
  cursor: pointer;
  margin-top: 40px;
  display: block;

  &:hover {
    color: #4f50de;
  }
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <Photo src={oneFlat} alt="" />
        <Photo src={twoFlat} alt="" />
        <Photo src={threeFlat} alt="" />
        <Photo src={fourFlat} alt="" />
        <Photo src={fiveFlat} alt="" />
        <MyLink to="/photo/club">Посмотреть фото клубов</MyLink>
        <MyLink to="/">Вернуться на главную</MyLink>
      </div>
    </Wrapper>
  );
}
