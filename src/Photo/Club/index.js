import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import oneClub from "./one-club.jpeg";
import twoClub from "./two-club.jpeg";
import threeClub from "./three-club.jpeg";
import fourClub from "./four-club.jpeg";

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
        <Photo src={oneClub} alt="" />
        <Photo src={twoClub} alt="" />
        <Photo src={threeClub} alt="" />
        <Photo src={fourClub} alt="" />
        <MyLink to="/photo/flat">Посмотреть фото квартир</MyLink>
        <MyLink to="/">Вернуться на главную</MyLink>
      </div>
    </Wrapper>
  );
}
