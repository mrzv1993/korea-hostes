import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

import wave from "./wave.svg";
import budda from "./budda.svg";

const Wrapper = styled.header`
  background: linear-gradient(
      248.11deg,
      #fff5f5 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #ffecf1;
  color: #685580;
  padding: 160px 0 -20px 0;
  display: flex;
  position: relative;
`;

const Title = styled.h1`
  font-weight: 600;
  line-height: 1.4;
  color: #685580;
  font-size: 32px;
  margin-bottom: 16px;

  @media (min-width: 576px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.h2`
  font-weight: 400;
  color: #3b426c;
  line-height: 1.56;
  font-size: 18px;
  margin-bottom: 16px;

  @media (min-width: 576px) {
    font-size: 24px;
  }
`;

const HeroWrap = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  position: relative;
  padding-top: 56px;

  @media (min-width: 991px) {
    flex-flow: row;
    padding-top: 56px;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  position: absolute;

  @media (min-width: 991px) {
    flex-flow: row;
    text-align: left;
    position: relative;
  }
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

const Budda = styled.img`
  width: 100%;
  height: auto;
  padding-top: 160px;

  @media (min-width: 991px) {
    width: 50%;
    padding-top: 0px;
  }
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

export default function() {
  return (
    <Wrapper>
      <div className="container z-1">
        <HeroWrap>
          <Hero>
            <Title>
              Работа в&nbsp;столице <br />
              Южной Кореи
            </Title>
            <Subtitle>
              Поможем устроиться на&nbsp;работу <br /> в&nbsp;Сеуле
              и&nbsp;других городах
            </Subtitle>
            <Link smooth to="#about">
              <Button>Узнайте больше</Button>
            </Link>
          </Hero>
          <Budda src={budda} alt="" />
        </HeroWrap>
      </div>
      <Wave />
    </Wrapper>
  );
}
