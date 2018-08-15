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

const CapchaInput = styled.input`
  display: none;
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
  margin-left: 8px;
  max-height: 48px;
`;

export default function() {
  return (
    <Wrapper id="mail">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Hero>
              <Title>Открывайте для себя новые возможности и страны</Title>
              <p>Оставьте любой контакт, чтобы перейти к заполнению анкеты</p>
              <Form
                method="POST"
                action="https://formspree.io/xxmrzv@gmail.com"
              >
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:3000/form"
                />
                {/* <input type="hidden" name="_cc" value="melkaya_98@mail.ru" /> */}
                <CapchaInput
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                />
                <Input type="text" name="name" placeholder="Имя" />
                <Input type="text" name="mail" placeholder="Your email" />
                <input
                  type="hidden"
                  role="uploadcare-uploader"
                  name="content"
                  data-public-key="01f26f7dbf82084eec5b"
                  data-multiple="true"
                  data-images-only
                />
                <Button type="submit">Продолжить</Button>
              </Form>
            </Hero>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
