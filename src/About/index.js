import React from "react";
import styled from "styled-components";

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

const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #3b426c;
  margin-bottom: 4px;
`;

const Link = styled.a`
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
  box-shadow: 0px 16px 16px -16px rgba(60, 76, 137, 0.32);
  transition: 0.32s ease-in-out;
  display: block;
  text-align: center;

  @media (min-width: 414px) {
    align-items: center;
    display: flex;
    text-align: left;
  }

  &:last-child {
    margin-top: 24px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 16px 16px -16px rgba(60, 76, 137, 0.4);
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
          <div className="col-xs-12 col-lg-6">
            <Title>
              Сеть караоке-клубов приглашает девушек <br />
              для работы хостес
            </Title>
            <p>
              Хостес&nbsp;&mdash; лицо заведения. Вы&nbsp;будите сопровождать
              гостей, петь в&nbsp;караоке, танцевать и&nbsp;играть
              в&nbsp;застольные игры.
            </p>
            <p>
              В&nbsp;этой работе много плюсов: разностороннее общение, высокая
              заработная плата и&nbsp;отсутствие материальной ответственности.
            </p>
            <p>
              Наша сеть включает десять клубов в&nbsp;городах, приближённых
              к&nbsp;Сеулу. Шесть из&nbsp;них открыты в&nbsp;Южной Корее уже
              больше трёх
              <br /> лет. Компания не&nbsp;останавливается на&nbsp;этом
              и&nbsp;в&nbsp;2018 году открыла клуб во&nbsp;Владивостоке.
            </p>
            <Link href="#">Посмотреть фотографии клубов</Link>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card>
              <Image src={nosex} alt="" />
              <div>
                <Title>Без интима</Title>
                <p>
                  В&nbsp;наших клубах запрещён интим. Для полной безопасности,
                  мы&nbsp;заранее предупреждаем гостей об&nbsp;этом. Так&nbsp;же
                  не&nbsp;приветствуется общение
                  <br /> с&nbsp;гостями в&nbsp;нерабочее время.
                </p>
              </div>
            </Card>
            <Card>
              <Image src={nodrink} alt="" />
              <div>
                <Title>Пассивная консумация</Title>
                <p>
                  Вам не&nbsp;придётся пить алкоголь, если вы&nbsp;этого
                  не&nbsp;хотите. В&nbsp;обязанности входит не&nbsp;предложение
                  гостю напитков, а&nbsp;поддержание атмосферы вечеринки
                  в&nbsp;компании с&nbsp;гостями и&nbsp;коллегами.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
