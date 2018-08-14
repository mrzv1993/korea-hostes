import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

import wave from "./wave.svg";
import budda from "./budda.svg";

const Wrapper = styled.header`
  height: 720px;
  background-color: #fff5f5;
  color: #685580;
  display: flex;
  padding-top: 160px;
  position: relative;
`;

const Wave = styled.div`
  position: absolute;
  bottom: -2px;
  width: 100%;
  height: 100%;
  background-image: url(${wave});
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  margin-top: 24px;
`;

const Button = styled.button`
  letter-spacing: 1.5px;
  margin-top: 24px;
  background: #ffffff;
  text-transform: uppercase;
  border-radius: 56px;
  border: none;
  padding: 16px 24px;
  font-size: 11px;
  color: #ff7e63
  cursor: pointer;
  transition: 0.16s ease-in-out;
  box-shadow: 0px 4px 8px rgba(104, 85, 128, 0.08);

  &:hover {
  transform: translateY(-2px);
  box-shadow: 0px 6px 16px rgba(104, 85, 128, 0.16);
  }
`;

const Budda = styled.div`
  background-image: url(${budda});
  width: 676px;
  height: 480px;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container z-1">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <Title>
              Работа в&nbsp;столице <br />
              Южной Кореи
            </Title>
            <SubTitle>
              Поможем устроиться на&nbsp;работу <br /> в&nbsp;Сеуле
              и&nbsp;других городах
            </SubTitle>
            <Link smooth to="/some/path#about">
              <Button>Узнайте больше</Button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-6">{/* <Budda /> */}</div>
        </div>
      </div>
      <Wave />
    </Wrapper>
  );
}
