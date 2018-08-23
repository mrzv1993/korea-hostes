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
  padding: 20px 0;
`;

const Title = styled.h1`
  font-weight: 600;
  line-height: 1.4;
  font-size: 32px;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.h2`
  font-weight: 400;
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

const Step = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin-top: 96px;
`;

const Hero = styled.div`
  margin-left: 24px;
  max-width: 280px;
  font-size: 14px;
  text-align: center;

  @media (min-width: 428px) {
    text-align: left;
  }

  @media (min-width: 1200px) {
    text-align: center;
  }
`;

const Pic = styled.div`
  position: relative;
  height: 108px;
  width: 108px;
  margin-bottom: 16px;
`;

const Number = styled.div`
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
  bottom: 4px;
  right: 0;
  position: absolute;
`;

export default function() {
  return (
    <Wrapper id="steps">
      <div className="container">
        <Title>Этапы трудоустройства</Title>
        <div className="row">
          <div className="col-xs-12 col-lg-6 col-xl-3">
            <Step>
              <Pic>
                <img src={anketa} alt="" />
                <Number>1</Number>
              </Pic>
              <Hero>
                <Subtitle>Анкета</Subtitle>
                <Paragraph>
                  Вы&nbsp;заполняете анкету на&nbsp;сайте, либо отправляете
                  сообщение в&nbsp;мессенджер или на&nbsp;почту.
                </Paragraph>
              </Hero>
            </Step>
          </div>
          <div className="col-xs-12 col-lg-6 col-xl-3">
            <Step>
              <Pic>
                <img src={call} alt="" />
                <Number>2</Number>
              </Pic>
              <Hero>
                <Subtitle>Инструктаж</Subtitle>
                <Paragraph>
                  Если вы&nbsp;подходите, наш менеджер свяжется с&nbsp;вами для
                  дальнейшего инструктажа.
                </Paragraph>
              </Hero>
            </Step>
          </div>

          <div className="col-xs-12 col-lg-6 col-xl-3">
            <Step>
              <Pic>
                <img src={contract} alt="" />
                <Number>3</Number>
              </Pic>
              <Hero>
                <Subtitle>Контракт</Subtitle>
                <Paragraph>
                  Согласовываем срок контракта, даты вылета
                  и&nbsp;подготавливаем необходимые документы.
                </Paragraph>
              </Hero>
            </Step>
          </div>
          <div className="col-xs-12 col-lg-6 col-xl-3">
            <Step>
              <Pic>
                <img src={korea} alt="" />
                <Number>4</Number>
              </Pic>
              <Hero>
                <Subtitle>Прибытие в Корею </Subtitle>
                <Paragraph>
                  В&nbsp;аэропорту вас втретит водитель и&nbsp;довезёт
                  до&nbsp;квартиры, в которой вы&nbsp;будете жить.
                </Paragraph>
              </Hero>
            </Step>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
