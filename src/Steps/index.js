import React from "react";
import styled from "styled-components";

import anketa from "./anketa.svg";
import call from "./call.svg";
import korea from "./korea.svg";
import contract from "./contract.svg";

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
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #3b426c;
`;

const Step = styled.div`
  display: flex;
  margin-top: 96px;
`;

const Hero = styled.div`
  margin-left: 24px;
  max-width: 280px;
`;

const Pic = styled.div`
  position: relative;
`;

const Сounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 18px;
  color: #6665f4;
  box-shadow: 0px 6px 16px rgba(141, 149, 190, 0.24);
  bottom: 8px;
  right: 0;
  position: absolute;
`;

export default function() {
  return (
    <Wrapper id="steps">
      <div className="container">
        <Title>Этапы трудоустройства</Title>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <Step data-aos="fade-down-right">
              <Pic>
                <img src={anketa} alt="" />
                <Сounter>1</Сounter>
              </Pic>
              <Hero>
                <SubTitle>Анкета</SubTitle>
                <p>
                  Вы заполняете анкету на сайте, либо отправляете сообщение в
                  мессенджер или на почту.
                </p>
              </Hero>
            </Step>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Step data-aos="fade-down-left">
              <Pic>
                <img src={call} alt="" />
                <Сounter>2</Сounter>
              </Pic>
              <Hero>
                <SubTitle>Инструктаж</SubTitle>
                <p>
                  Если вы подходите, наш менеджер свяжется с вами для
                  дальнейшего инструктажа.
                </p>
              </Hero>
            </Step>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <Step data-aos="fade-up-right">
              <Pic>
                <img src={contract} alt="" />
                <Сounter>3</Сounter>
              </Pic>
              <Hero>
                <SubTitle>Контракт</SubTitle>
                <p>
                  Согласовываем срок контракта, даты вылета и подготавливаем
                  необходимые документы.
                </p>
              </Hero>
            </Step>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Step data-aos="fade-up-left">
              <Pic>
                <img src={korea} alt="" />
                <Сounter>4</Сounter>
              </Pic>
              <Hero>
                <SubTitle>Прибытие в Корею </SubTitle>
                <p>
                  В аэропорту вас втретит водитель и довезёт до квартиры, в
                  которой вы будете жить.
                </p>
              </Hero>
            </Step>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
