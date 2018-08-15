import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #f6f8ff;
  color: #5e6590;
  font-weight: 400;
  line-height: 1.56;
  padding: 160px 0;
`;
const Title = styled.h2`
  font-size: 64px;
  line-height: 56px;
  font-weight: 400;
  color: #fd9480;
  line-height: 1.24;
`;

const Hero = styled.div`
  background: linear-gradient(
    160deg,
    rgba(249, 220, 212, 1) 32%,
    rgba(255, 169, 169, 1) 100%
  );
  border-radius: 8px;
  padding: 56px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(49, 58, 94, 0.08);
  border-radius: 4px;
  border: none;
  padding: 16px 24px;
  margin-left: 8px;
  max-height: 48px;
`;

const Button = styled.button`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #ffffff;
  background: #6664f4;
  box-shadow: 0px 4px 8px rgba(49, 58, 94, 0.08);
  border-radius: 4px;
  border: none;
  padding: 16px 24px;
  margin-left: 8px;
  max-height: 48px;
`;

export default function() {
  return (
    <Wrapper id="steps">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Hero>
              <Title>Открывайте для себя новые возможности и страны</Title>
              <p>Оставьте любой контакт, чтобы перейти к заполнению анкеты</p>
              <Form name="mail">
                <input type="hidden" name="mail" value="mail" />
                <Input type="text" name="name" placeholder="Ваше имя" />
                <Input type="text" name="contact" placeholder="Контакт" />
                <Button type="submit">Продолжить</Button>
              </Form>
            </Hero>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
