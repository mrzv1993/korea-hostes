import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import home from "./home.svg";
import docs from "./docs.svg";
import eat from "./eat.svg";
import plane from "./plane.svg";
import arrow from "../About/arrow.svg";

const Wrapper = styled.section`
  background: linear-gradient(180deg, #f6f8fe 0%, #fcfdff 100%), #c4c4c4;
  color: #5e6590;
  font-weight: 400;
  line-height: 1.56;
  padding: 80px 0;
`;

const Title = styled.h1`
  font-weight: 600;
  line-height: 1.4;
  font-size: 32px;
  margin-bottom: 80px;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 48px;
    margin-bottom: 160px;
  }
`;

const Subtitle = styled.h2`
  font-weight: 400;
  line-height: 1.56;
  font-size: 20px;
  text-align: center;
  margin-bottom: 8px;

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

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 16px -16px rgba(60, 76, 137, 0.32);
  padding: 64px 32px 32px 32px;
  position: relative;
  border-radius: 8px;
  margin-bottom: 72px;
`;

const RoomCard = Card.extend`
  margin-bottom: 16px;
`;

const LinkCard = Card.extend`
  padding: 32px;

  @media (min-width: 992px) {
    margin-top: 16px;
  }
`;

const CustomLink = styled(Link)`
  color: #6869f4;
  font-weight: 600px;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  transition: 0.4s ease-in-out;

  @media (min-width: 1200px) {
    text-align: left;
  }

  &:hover {
    color: #4f50de;
  }
`;

const Span = styled.span`
  display: inline-block;
  position: relative;

  &::after {
    content: url(${arrow});
    margin-left: 8px;
    top: 1px;
    position: absolute;
    transition: 0.4s ease-in-out;
    opacity: 0;

    ${LinkCard}:hover & {
      transform: translateX(4px);
    }

    @media (min-width: 1200px) {
      opacity: 100;
    }
  }
`;

const FlyCard = Card.extend``;

const EatCard = Card.extend`
  @media (min-width: 992px) {
    margin-top: 48px;
  }
`;

const Circle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 56px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(143, 155, 214, 0.16);
  top: -32px;
  left: calc(50% - 36px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function() {
  return (
    <Wrapper id="care">
      <div className="container">
        <Title>
          Все заботы берём <br /> на себя
        </Title>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Card data-aos="fade-up">
              <Circle>
                <img src={docs} alt="" />
              </Circle>
              <Subtitle>Оформление визы </Subtitle>
              <Paragraph>
                Для девушек из&nbsp;России безвизовое прибывание в&nbsp;Южной
                Корее&nbsp;&mdash; 60, потом еще 30&nbsp;дней. Не&nbsp;больше
                90&nbsp;дней за&nbsp;полгода.
              </Paragraph>
              <Paragraph>
                Девушки из&nbsp;Украины, Белоруссии, Молдовы и&nbsp;Казахстана
                открывают визу в&nbsp;своей стране, обратившись в&nbsp;визовый
                центр или консульство.
              </Paragraph>
              <Paragraph>
                При заключение контракта от&nbsp;четырёх месяцев,
                мы&nbsp;полностью оплачиваем расходы на&nbsp;получение визы.
                Так&nbsp;же помогаем получить долгосрочную визу тем, кто уже
                в&nbsp;Корее и&nbsp;планирует остаться на&nbsp;срок контракта
                больше двух месяцев.
              </Paragraph>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-4">
            <RoomCard data-aos="fade-up">
              <Circle>
                <img src={home} alt="" />
              </Circle>
              <Subtitle>Проживание</Subtitle>
              <Paragraph>
                Проживание полностью бесплатное. Квартиры распологаются
                в&nbsp;5-10 минутах ходьбы от&nbsp;клуба.
              </Paragraph>
              <Paragraph>
                Так&nbsp;же в&nbsp;шаговой доступности: метро, фитнес-залы,
                торговые центры, рынки фруктов и&nbsp;овощей, круглосуточные
                магазины.
              </Paragraph>
              <Paragraph>
                У&nbsp;вас будет всё необходимое для комфортного проживания:
                санузел и&nbsp;кухня, плита и&nbsp;стиральная машина, бесплатный
                интернет.
              </Paragraph>
              <Paragraph>
                В&nbsp;квартире проживает до&nbsp;восьми девушек, в&nbsp;каждой
                комнате по&nbsp;две.
              </Paragraph>
            </RoomCard>
            <CustomLink to="/photo/club">
              <LinkCard data-aos="fade-up">
                <Span>Посмотреть фотографии квартир</Span>
              </LinkCard>
            </CustomLink>
          </div>
          <div className="col-xs-12 col-lg-4">
            <FlyCard data-aos="fade-up">
              <Circle>
                <img src={plane} alt="" />
              </Circle>
              <Subtitle>Перелет</Subtitle>
              <Paragraph>
                При заключении контракта от&nbsp;двух месяцев девушкам
                из&nbsp;Владивостока и&nbsp;Хабаровска билеты в&nbsp;обе стороны
                оплачивает сеть.
              </Paragraph>
              <Paragraph>
                Для девушек из&nbsp;других городов при заключении контракта:
                <br />1 месяц — 250$; <br />2 месяца — 500$; <br />
                от&nbsp;трёх месяцев &mdash; полная оплата.
              </Paragraph>
            </FlyCard>
            <EatCard data-aos="fade-up">
              <Circle>
                <img src={eat} alt="" />
              </Circle>
              <Subtitle>Питание</Subtitle>
              <Paragraph>
                Питаться вы&nbsp;будете самостоятельно, но&nbsp;за&nbsp;наши
                деньги. Как только вы&nbsp;прилетите, а&nbsp;дальше раз
                в&nbsp;месяц, мы&nbsp;выдаём 50&nbsp;000 вон на питание.
              </Paragraph>
              <Paragraph>
                Этой суммы достаточно, чтобы полноценно питаться всю неделю.
              </Paragraph>
            </EatCard>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
