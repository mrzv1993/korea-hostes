import React from "react";
import styled from "styled-components";

import home from "./home.svg";
import docs from "./docs.svg";
import eat from "./eat.svg";
import plane from "./plane.svg";

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
  text-align: center;
  margin-bottom: 8px;
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(143, 155, 214, 0.16);
  padding: 40px 32px;
  position: relative;
  border-radius: 2px;
`;

const Circle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 56px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(143, 155, 214, 0.16);
  top: -32px;
  left: calc(50% - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function() {
  return (
    <Wrapper id="care">
      <div className="container">
        <Title>Все заботы берём на себя</Title>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Card>
              <Circle>
                <img src={home} alt="" />
              </Circle>
              <SubTitle>Проживание</SubTitle>
              <p>
                Проживание полностью бесплатное. Квартиры распологаются
                в&nbsp;5-10 минутах ходьбы от&nbsp;клуба.
              </p>
              <p>
                Так&nbsp;же в&nbsp;шаговой доступности: метро, фитнес-залы,
                торговые центры, рынки фруктов и&nbsp;овощей, круглосуточные
                магазины.
              </p>
              <p>
                У&nbsp;вас будет всё необходимое для комфортного проживания:
                санузел и&nbsp;кухня, плита и&nbsp;стиральная машина, бесплатный
                интернет.
              </p>
              <p>
                В&nbsp;квартире проживает до&nbsp;восьми девушек, в&nbsp;каждой
                комнате по&nbsp;две.
              </p>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-4">
            <Card>
              <Circle>
                <img src={docs} alt="" />
              </Circle>
              <SubTitle>Оформление визы </SubTitle>
              <p>
                Для девушек из&nbsp;России безвизовое прибывание в&nbsp;Южной
                Корее&nbsp;&mdash; 60, потом еще 30&nbsp;дней. Не&nbsp;больше
                90&nbsp;дней за&nbsp;полгода.
              </p>
              <p>
                Девушки из&nbsp;Украины, Белоруссии, Молдовы и&nbsp;Казахстана
                открывают визу в&nbsp;своей стране, обратившись в&nbsp;визовый
                центр или консульство.
              </p>
              <p>
                При заключение контракта от&nbsp;четырёх месяцев,
                мы&nbsp;полностью оплачиваем расходы на&nbsp;получение визы.
                Так&nbsp;же помогаем получить долгосрочную визу тем, кто уже
                в&nbsp;Корее и&nbsp;планирует остаться на&nbsp;срок контракта
                больше двух месяцев.
              </p>
            </Card>
            <Card>
              <Circle>
                <img src={eat} alt="" />
              </Circle>
              <SubTitle>Питание</SubTitle>
              <p>
                Питаться вы будете самостоятельно, но за наши деньги. Как только
                вы прилетите, а далыше раз в месяц, мы выдаём 50 000 вон на
                питание. Этой суммы достаточно, чтобы полноценно питаться всю
                неделю.
              </p>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-4">
            <Card>
              <Circle>
                <img src={plane} alt="" />
              </Circle>
              <SubTitle>Перелет</SubTitle>
              <p>
                При заключении контракта от двух месяцев девушкам
                из Владивостока и Хабаровска билеты в обе стороны оплачивает
                сеть. Для девушек из других городов при заключении контракта: до
                двух месяцев — 250$; до трёх месяцев — 500$; от трёх месяцев —
                полная оплата.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
