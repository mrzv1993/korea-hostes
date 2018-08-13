import React from "react";
import styled from "styled-components";

import arrow from "./arrow-orange.svg";
import money from "./money.svg";
import pay from "./pay.svg";
import tea from "./tea.svg";
import plus from "./plus.svg";

const Wrapper = styled.section`
  background-color: #f6f8ff;
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

const Bullet = styled.p`
  display: inline-block;
  position: relative;
  padding-left: 16px;

  &::before {
    content: url(${arrow});
    margin-left: -16px;
    position: absolute;
  }
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  background: linear-gradient(103.12deg, #6665f4 0%, #5153de 100%);
  padding: 32px 32px 128px 32px;
  border-radius: 8px;
  text-align: center;
  margin-top: 32px;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 8px;
  }
`;

const SalaryList = styled.div`
  position: relative;
  width: 100%;
`;

const SalaryItems = styled.div`
  position: relative;
  top: -92px;
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
  width: 100%;
  padding: 0 32px;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
  }
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 16px -16px rgba(60, 76, 137, 0.32);
  border-radius: 8px;
  width: 100%;
  height: 186px;
  text-align: center;
  font-size: 12px;
  box-shadow: 0px 16px 16px -16px rgba(60, 76, 137, 0.32);
  padding: 24px;
  position: relative;
  margin-bottom: 4px;
  z-index: 1;

  @media (min-width: 768px) {
    margin-left: 4px;

    &:first-child {
      margin-left: 0;
    }
  }

  span {
    font-size: 16px;
  }
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 56px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(143, 155, 214, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  right: calc(50% - 16px);
  bottom: calc(100% - 16px);

  @media (min-width: 768px) {
    right: calc(100% - 14px);
    bottom: calc(50% - 16px);
  }
`;

export default function() {
  return (
    <Wrapper id="salary">
      <div className="container">
        <div className="row">
          <Title>График работы и заработная плата</Title>
          <div className="col-xs-12 col-lg-4">
            <Bullet>
              Каждый день с 19:00 до 05:00. Выходной один раз в месяц. При
              условии контракта от четырёх месяцев — два выходных в месяц.
            </Bullet>
            <Bullet>
              Средний заработок хостес в месяц составляет 2500-3000$. Всё
              зависит от вашего желания работать.
            </Bullet>
            <Bullet>
              Выплата в южнокорейских вонах (KRW) или долларах США. Только
              наличным расчётом.
            </Bullet>
          </div>
          <div className="col-xs-12 col-lg-8">
            <SalaryList>
              <SubTitle>Из чего складывается зарплата</SubTitle>
              <SalaryItems>
                <Card data-aos="zoom-in">
                  <img src={money} alt="" />
                  <p>
                    Ежемесечный оклад <br /> <span>1 000 000 KRW</span>
                  </p>
                </Card>
                <Card data-aos="zoom-in">
                  <Circle>
                    <img src={plus} alt="" />
                  </Circle>
                  <img src={pay} alt="" />
                  <p>
                    Выплата раз в неделю <br />
                    <span>10 000 KRW</span> <br />
                    за час работы
                  </p>
                </Card>
                <Card data-aos="zoom-in">
                  <Circle>
                    <img src={plus} alt="" />
                  </Circle>
                  <img src={tea} alt="" />
                  <p>
                    <span>Чаевые от гостей</span> полность остаются у вас
                  </p>
                </Card>
              </SalaryItems>
            </SalaryList>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
