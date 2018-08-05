import React from "react";
import styled from "styled-components";

import pay from "./pay.svg";
import hour from "./hour.svg";
import tea from "./tea.svg";
import plus from "./plus.svg";

const Wrapper = styled.section`
  background-color: #ffffff;
  color: #5e6590;
  font-weight: 400;
  line-height: 1.56;
  padding: 160px 0;
`;

const Title = styled.h2`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 96px;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #3b426c;
  margin-bottom: 8px;
`;

const Cards = styled.div`
  display: flex;
`;

const Card = styled.div`
  background: #f6f8ff;
  padding: 40px 32px;
  position: relative;
  border-radius: 2px;
  text-align: center;
  margin-left: 4px;

  p {
    font-size: 12px;
  }
  span {
    font-size: 16px;
  }
`;

const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 56px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 6px 16px rgba(141, 149, 190, 0.24);
  right: -32px;
  top: calc(50% - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export default function() {
  return (
    <Wrapper id="salary">
      <div className="container">
        <Title>Условия работы</Title>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <SubTitle>График работы</SubTitle>
            <p>
              Каждый день с 19:00 до 05:00, выходной один раз в месяц. При
              условии контракта от четырёх месяцев — два выходных в месяц.
            </p>
            <SubTitle>Средний зароботок</SubTitle>
            <p>
              Средний заработок хостес в месяц составляет 2500-3000$. Все
              зависит от вашего желания работать. Выплата в южнокорейских вонах
              (KRW) или долларах США (USD). Только наличным расчётом.
            </p>
          </div>
          <div className="col-xs-12 col-lg-8">
            <div className="row">
              <div className="col-xs-12 col-lg-4" />
            </div>
            <SubTitle>Из чего складывается заработная плата</SubTitle>
            <Cards>
              <Card>
                <Circle>
                  <img src={plus} alt="" />
                </Circle>
                <img src={pay} alt="" />
                <p>
                  Ежемесечный оклад <br /> <span>1 000 000 KRW</span>
                </p>
              </Card>
              <Card>
                <Circle>
                  <img src={plus} alt="" />
                </Circle>
                <img src={hour} alt="" />
                <p>
                  Выплата раз в неделю <br />
                  <span>10 000 KRW </span>
                  <br />за час работы
                </p>
              </Card>
              <Card>
                <img src={tea} alt="" />
                <p>
                  <span>Чаевые от гостей</span> <br /> полность остаются у вас
                </p>
              </Card>
            </Cards>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
