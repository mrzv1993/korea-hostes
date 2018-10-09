import React from "react";
import styled from "styled-components";

import sms from "./sms.svg";
import call from "./call.svg";

const Wrapper = styled.footer`
  background: #f6f8ff;
  padding: 40px 0;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  align-items: flex-start;
  margin-top: 40px;
  padding-right: 32px;

  @media (min-width: 768px) {
    margin-right: 80px;
    margin-top: 0px;
  }

  @media (min-width: 496px) {
    margin-bottom: 0px;
  }
`;

const Pic = styled.img`
  display: block;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #313a5e;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #717790;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <Contact>
          <Item>
            <Pic src={sms} alt="" />
            <Title>Напишите нам</Title>
            <Text>
              Всю подробную информацию
              <br /> и&nbsp;ответы на&nbsp;любые вопросы <br /> можно узнать,
              обратившись <br />
              к&nbsp;нашему менеджеру.
            </Text>
          </Item>
          <Item>
            <Pic src={call} alt="" />
            <Title>Контакты</Title>
            <Text>
              Email:{" "}
              <a href="mailto:matreshkakorea@gmail.com">matreshkakorea@gmail.com</a>
              <br />
              Instagram:{" "}
              <a href="https://www.instagram.com/mia.work_korea/">
                mia.work_korea
              </a>
            </Text>
            <Text>
              WhatsApp / Telegram:
              <br />
              <a href="tel:MiaAgencyKorea@gmail.com">+82 10 2357 – 5325</a>
            </Text>
          </Item>
        </Contact>
      </div>
    </Wrapper>
  );
}
