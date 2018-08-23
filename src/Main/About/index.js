import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import nosex from "./nosex.svg";
import nodrink from "./nodrink.svg";
import arrow from "./arrow.svg";

const Wrapper = styled.section`
  background-color: #f6f8ff;
  color: #5e6590;
  font-weight: 400;
  line-height: 1.56;
  padding: 160px 0;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  color: #3b426c;
  line-height: 1.56;
  font-size: 20px;

  @media (min-width: 576px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;

  @media (min-width: 576px) {
    font-size: 15px;
  }
`;

const MyLink = styled(Link)`
  color: #6869f4;
  font-weight: 600px;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 40px;
  margin-bottom: 40px;
  display: inline-block;
  font-weight: 500;
  position: relative;
  transition: 0.4s ease-in-out;
  cursor: pointer;

  @media (min-width: 992px) {
    margin-top: 16px;
    margin-bottom: 0px;
  }

  &:hover {
    color: #4f50de;
  }

  &::after {
    content: url(${arrow});
    margin-left: 8px;
    top: 1px;
    position: absolute;
    transition: 0.4s ease-in-out;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

const Card = styled.div`
  font-size: 14px;
  font-weight: 400;
  background-color: #ffffff;
  border-radius: 8px;
  border-top-right-radius: 0;
  padding: 24px 32px;
  line-height: 1.32;
  box-shadow: rgba(49, 58, 94, 0.24) 0px 15px 30px 1px;
  display: block;
  text-align: center;
  transition: 0.4s ease-in-out;

  @media (min-width: 414px) {
    align-items: center;
    display: flex;
    text-align: left;
  }

  &:last-child {
    margin-top: 24px;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 24px;

  @media (min-width: 414px) {
    margin-right: 32px;
  }
`;

export default function() {
  return (
    <Wrapper id="about">
      <div className="container">
        <div className="row">
          <div
            className="col-xs-12 col-lg-6"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <Subtitle>
              Сеть караоке-клубов приглашает девушек <br />
              для работы хостес
            </Subtitle>
            <Paragraph>
              Хостес&nbsp;&mdash; лицо заведения. Вы&nbsp;будите сопровождать
              гостей, петь в&nbsp;караоке, танцевать и&nbsp;играть
              в&nbsp;застольные игры.
            </Paragraph>
            <Paragraph>
              В&nbsp;этой работе много плюсов: разностороннее общение, высокая
              заработная плата и&nbsp;отсутствие материальной ответственности.
            </Paragraph>
            <Paragraph>
              Наша сеть включает десять клубов в&nbsp;городах, приближённых
              к&nbsp;Сеулу. Шесть из&nbsp;них открыты в&nbsp;Южной Корее уже
              больше трёх
              <br /> лет. Компания не&nbsp;останавливается на&nbsp;этом
              и&nbsp;в&nbsp;2018 году открыла клуб во&nbsp;Владивостоке.
            </Paragraph>
            <MyLink to="/photo/club">Посмотреть фотографии клубов</MyLink>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card data-aos="fade-left">
              <Image src={nosex} alt="" />
              <div>
                <Subtitle>Без интима</Subtitle>
                <Paragraph>
                  В&nbsp;наших клубах запрещён интим. Для полной безопасности,
                  мы&nbsp;заранее предупреждаем гостей об&nbsp;этом. Так&nbsp;же
                  не&nbsp;приветствуется общение
                  <br /> с&nbsp;гостями в&nbsp;нерабочее время.
                </Paragraph>
              </div>
            </Card>
            <Card data-aos="fade-left">
              <Image src={nodrink} alt="" />
              <div>
                <Subtitle>Пассивная консумация</Subtitle>
                <Paragraph>
                  Вам не&nbsp;придётся пить алкоголь, если вы&nbsp;этого
                  не&nbsp;хотите. В&nbsp;обязанности входит не&nbsp;предложение
                  гостю напитков, а&nbsp;поддержание атмосферы вечеринки
                  в&nbsp;компании с&nbsp;гостями и&nbsp;коллегами.
                </Paragraph>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
