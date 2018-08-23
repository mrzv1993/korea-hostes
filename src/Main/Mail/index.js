import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: linear-gradient(180deg, #fafcff 0%, #f6f8fe 100%);
  color: #5e6590;
  font-weight: 400;
  line-height: 1.56;
  padding: 40px 0;
`;

const Title = styled.h1`
  font-weight: 600;
  line-height: 1.4;
  font-size: 20px;
  text-align: center;
  color: #ff7054;

  @media (min-width: 576px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.h2`
  font-weight: 400;
  line-height: 1.56;
  font-size: 16px;
  color: #666f95;
  padding: 16px 0;

  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

const Hero = styled.div`
  background: linear-gradient(
    160deg,
    rgba(249, 220, 212, 1) 32%,
    rgba(255, 169, 169, 1) 100%
  );
  border-radius: 8px;
  text-align: center;
  padding: 40px 16px;

  @media (min-width: 576px) {
    padding: 56px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 8px;
  }
`;

const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(49, 58, 94, 0.08);
  border-radius: 4px;
  border: none;
  padding: 16px 24px;
  max-height: 48px;
  width: 100%;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 33%;
    margin-bottom: 0px;
    margin-left: 8px;
  }
`;

const Button = styled.button`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  color: #ffffff;
  background: #6664f4;
  box-shadow: 0px 4px 8px rgba(49, 58, 94, 0.08);
  border-radius: 4px;
  border: none;
  padding: 16px 24px;
  max-height: 48px;
  width: 100%;

  @media (min-width: 768px) {
    text-align: left;
    width: auto;
    margin-left: 8px;
  }
`;

export default function() {
  return (
    <Wrapper id="mail">
      <div className="container">
        <Hero>
          <Title>Открывайте для себя новые возможности и страны</Title>
          <Subtitle>Открывайте для себя новые возможности и страны</Subtitle>
          <Form method="POST" action="https://formspree.io/xxmrzv@gmail.com">
            <input type="hidden" name="_next" value="https://miawork.ru/form" />
            <input type="hidden" name="_cc" value="MiaAgencyKorea@gmail.com" />
            <input type="hidden" name="_language" value="ru" />
            <Input type="text" name="Имя" placeholder="Имя" />
            <Input type="text" name="Контакт" placeholder="Контакт" />
            <Button type="submit">Продолжить</Button>
          </Form>
        </Hero>
      </div>
    </Wrapper>
  );
}
