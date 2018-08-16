import React from "react";
import styled from "styled-components";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const Wrapper = styled.section`
  background: #f6f8ff;
  padding: 40px 0;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  text-align: center;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #3b426c;
  text-align: center;
`;

const FormWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(49, 58, 94, 0.08);
  border-radius: 4px;
  margin-top: 80px;
  padding: 40px 4% 0 4%;
`;

const MyLabel = styled(Label)`
  margin-top: 32px;
  font-size: 18px;
  font-weight: 400;
  color: #696cf4;
`;

const Caption = styled.p`
  font-size: 13px;
  color: #313a5e;
  line-height: 1.5;
`;

const CustomButton = styled.button`
  background-color: #6664f4;
  border: none;
  padding: 16px 32px;
  font-weight: 600;
  border-radius: 4px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  transition: 0.16s ease-in-out;
  box-shadow: 0px 4px 8px rgba(104, 85, 128, 0.08);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 16px rgba(104, 85, 128, 0.16);
  }
`;

const WrapperButton = styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Title>Анкета</Title>
            <SubTitle>Анкета</SubTitle>
            <FormWrapper>
              <Form
                method="POST"
                action="https://formspree.io/xxmrzv@gmail.com"
              >
                <input type="hidden" name="_next" value="https://miawork.ru" />
                <input
                  type="hidden"
                  name="_cc"
                  value="MiaAgencyKorea@gmail.com"
                />
                <input type="hidden" name="_language" value="ru" />
                {/* Имя и возраст */}
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <MyLabel for="name">Как вас зовут?</MyLabel>
                    <Input type="text" name="Имя" id="name" />
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <MyLabel for="age">Возраст</MyLabel>
                    <Input type="text" name="Возраст" id="age" />
                  </div>
                </div>

                {/* Рост и Вес */}
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <MyLabel for="height">Ваш рост</MyLabel>
                    <Input type="text" name="Рост" id="height" />
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <MyLabel for="weight">Ваш вес</MyLabel>
                    <Input type="text" name="Вес" id="weight" />
                  </div>
                </div>

                {/* Гражданство и город */}
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <MyLabel for="citizenship">Гражданство</MyLabel>
                    <Input type="text" name="Гражданство" id="citizenship" />
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <MyLabel for="city">Город</MyLabel>
                    <Input type="text" name="Город" id="city" />
                  </div>
                </div>

                {/* Фотографии */}
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <MyLabel for="content">
                      Фотографии
                      <Caption>
                        Прикрепите 8-10 фотографий. Для хостес не обязательны
                        <br />
                        профессиональные фото, но имейте виду — чем лучше фото,
                        тем лучше.
                      </Caption>
                    </MyLabel>
                    <input
                      type="hidden"
                      role="uploadcare-uploader"
                      name="Фотографии"
                      data-public-key="01f26f7dbf82084eec5b"
                      data-multiple="true"
                      data-images-only
                    />
                  </div>
                </div>

                {/* Ссылка на видео */}
                <div className="row">
                  <div className="col-xs-12">
                    <MyLabel for="video">
                      Ссылка на видео-презентацию
                      <Caption>
                        Прикрепите 8-10 фотографий. Для хостес не обязательны
                        <br />
                        профессиональные фото, но имейте виду — чем лучше фото,
                        тем лучше.
                      </Caption>
                    </MyLabel>
                    <Input
                      type="text"
                      name="Видео"
                      id="video"
                      placeholder="Ссылка"
                    />
                  </div>
                </div>

                {/* Дата и номер */}
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <MyLabel for="date">Планируемая дата вылета</MyLabel>
                    <Input type="text" name="Дата" id="date" />
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <MyLabel for="phone">Номер телефона</MyLabel>
                    <Input type="text" name="Телефон" id="phone" />
                  </div>
                </div>
                <WrapperButton>
                  <CustomButton type="submit">Отправить анкету</CustomButton>
                </WrapperButton>
              </Form>
            </FormWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
