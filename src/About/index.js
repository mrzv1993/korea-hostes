import React from "react";
import styled from "styled-components";

import nosex from "./nosex.svg";
import nodrink from "./nodrink.svg";

const Wrapper = styled.section`
  background-color: #fafcff;
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

const Card = styled.div`
  font-size: 14px;
  font-weight: 400;
  background-color: #ffffff;
  box-shadow: 0px 3px 12px rgba(143, 155, 214, 0.16);
  border-radius: 16px;
  border-top-right-radius: 0;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  line-height: 1.32;

  &:last-child {
    margin-top: 24px;
  }

  img {
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
              больше трёх лет. Компания не&nbsp;останавливается на&nbsp;этом
              и&nbsp;в&nbsp;2018 году открыла клуб во&nbsp;Владивостоке.
            </p>
            <a href="#">Задать вопрос</a>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card>
              <img src={nosex} alt="" />
              <div>
                <Title>Без интима</Title>
                <p>
                  В&nbsp;наших клубах запрещён интим. Для полной безопасности,
                  мы&nbsp;заранее предупреждаем гостей об&nbsp;этом. Так&nbsp;же
                  не&nbsp;приветствуется общение<br /> с&nbsp;гостями
                  в&nbsp;нерабочее время.
                </p>
              </div>
            </Card>
            <Card>
              <img src={nodrink} alt="" />
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
