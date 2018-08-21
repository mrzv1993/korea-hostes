import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const Wrapper = styled.section`
  background-color: #fafcff;
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
`;

const User = styled.div`
  display: flex;
`;

const UserImg = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 40px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(100.41deg, #f9dcd4 -22.4%, #ffa9a9 100%), #fff5f5;
`;

const UserInfo = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 24px;
`;

const Name = styled.b`
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #696cf4;
`;

const City = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #717790;
`;

const Question = styled.h4`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: #3b426c;
  margin-top: 16px;
  max-width: 840px;
  position: relative;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(113, 119, 144, 0);
  border: 0.5px dashed rgba(113, 119, 144, 0.24);
  margin-top: 24px;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
`;

const Answer = styled.div`
  z-index: 1;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0.3deg,
      #fafcff 0%,
      rgba(250, 252, 255, 0.72) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Button = styled.button`
  background: #6664f4;
  border-radius: 56px;
  font-weight: 600;
  line-height: normal;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 16px 32px;
  border: none;
  color: #ffffff;
  box-shadow: 0px 4px 8px rgba(104, 85, 128, 0.08);
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: calc(50% - 128px);
  width: 256px;
  text-align: center;
  transition: 0.16s ease-in-out;
  box-shadow: 0px 4px 8px rgba(104, 85, 128, 0.08);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 16px rgba(104, 85, 128, 0.16);
  }
`;

const Review = styled.div`
  margin: 64px auto 0 auto;
`;

export default function() {
  return (
    <Wrapper id="review">
      <div className="container">
        <Title>Отзывы</Title>
        <div className="row">
          <Review id="one">
            <div className="col-xs-12">
              <User>
                <UserImg>🍉</UserImg>
                <UserInfo>
                  <Name>Ксенья, 20 лет</Name>
                  <City>Владивосток</City>
                </UserInfo>
              </User>
              <Question>
                <SubTitle>Чем занималась?</SubTitle>
                <p>
                  💭 Совмещала учебу в&nbsp;университете и&nbsp;работу менеджера
                  в фитнес-клубе, всегда мечтала путешествовать,
                  но&nbsp;финансов не хватало. Однажды услышала от&nbsp;подруги
                  о&nbsp;работе хостес в&nbsp;Корее и задумалась поехать
                  подработать на&nbsp;каникулах. Через пол года мы поехали
                  с&nbsp;подругой на&nbsp;месяц. Но&nbsp;все&nbsp;же главной
                  моей целью была не работа, а&nbsp;путешествие в&nbsp;другую
                  страну. Мой первый раз заграницей, у&nbsp;меня была полная
                  эйфория&nbsp;&mdash; я&nbsp;влюбилась в&nbsp;страну
                  и&nbsp;людей. Главным плюсом было&nbsp;то, что билеты
                  не&nbsp;надо было покупать самой и проживание бесплатное.
                  Когда нас поселили в&nbsp;квартиру, я&nbsp;была удивлена: все
                  было настолько &laquo;сделано для людей&raquo;, все магазины
                  рядом.
                </p>
                <Line />
              </Question>
              <Question>
                <SubTitle>Что понравилось?</SubTitle>
                <p>
                  Мне было весело работать в&nbsp;клубе, и&nbsp;работа мне
                  действительно нравилась: весело, каждый день вечеринки,
                  караоке. Я&nbsp;поняла, что мне этого очень давно
                  не&nbsp;хватало, а&nbsp;такая работа помогла мне развеяться.
                  Я&nbsp;не&nbsp;могу сказать, что мне в&nbsp;работе что-то не
                  нравилось. Был, конечно, дискомфорт в&nbsp;общении
                  с&nbsp;гостями, но спасало&nbsp;то, что всегда можно было
                  увлечь гостя песнями и&nbsp;танцами, играми. В&nbsp;общем,
                  в&nbsp;любой ситуации можно было найти выход, главное мозги
                  включать 😂 Девочки разные попадаются тоже, с&nbsp;которыми
                  живёшь и&nbsp;работаешь, но&nbsp;в&nbsp;целом со&nbsp;всеми
                  находила общий язык.
                </p>
                <Line />
              </Question>
              <Question>
                <SubTitle>Какие были опасения?</SubTitle>
                <p>
                  Больше всего боялась, когда летела, что отберут паспорт.
                  Девочки, будьте разумнее: 21&nbsp;век на&nbsp;дворе, рабство
                  давно отменили😂🙈 Я поняла, что для первого контракта лучше
                  выбрать Корею&nbsp;&mdash; одну из самых безопасных стран.
                </p>
                <Line />
              </Question>
              <Question>
                <SubTitle>Какие были опасения?</SubTitle>
                <p>
                  Я&nbsp;встретила свою любовь 💕 Страна меня полностью меня
                  поглотила, я сделала визу и&nbsp;осталась, живу уже пол года
                  рядом с&nbsp;Сеулом. Сейчас, правда, я&nbsp;не&nbsp;работаю
                  в&nbsp;клубе, но&nbsp;учу корейский язык и&nbsp;готовлюсь к
                  поступлению в&nbsp;университет уже в&nbsp;Корее.
                  Я&nbsp;поняла, что всегда стоит верить в&nbsp;свои силы
                  и&nbsp;ничего не&nbsp;бояться✈️
                </p>
              </Question>
            </div>
          </Review>
          <Review>
            <div className="col-xs-12">
              <User>
                <UserImg>🍒</UserImg>
                <UserInfo>
                  <Name>Катерина, 26 лет</Name>
                  <City>Екатеринбург</City>
                </UserInfo>
              </User>
              <Question>
                <SubTitle>Чем занималась?</SubTitle>
                <Answer>
                  Как-то раз я присутствовала на встрече с девочками, которые
                  собирались на работу в Корею. До этого я даже не представляла,
                  что это такое, не думала, что возможно вот так вот уехать в
                  другую страну и заработать за 2 месяца столько, сколько я
                  зарабатывала в России в год, работая в театре!! Но благодаря
                  их разговорам, я поняла, что это реально и, конечно, захотела
                  тоже. Тем более, что для этого не требовалось ни знания
                  корейского языка, ни денежных вложений, ничего! Просто берешь
                  паспорт и едешь! Элементарно!
                </Answer>
                <Link to="/reviews#two">
                  <Button>Прочитать все отзывы</Button>
                </Link>
              </Question>
            </div>
          </Review>
        </div>
      </div>
    </Wrapper>
  );
}
