import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #fafcff;
  color: #5e6590;
  font-weight: 400;
  line-height: 1.56;
  padding: 160px 0;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #3b426c;
  margin-bottom: 4px;
`;

const Name = styled.b`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #3b426c;
  margin-bottom: 4px;
`;

const City = styled.b`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #3b426c;
  margin-bottom: 4px;
`;

const Question = styled.h4`
  font-size: 15px;
  font-weight: 400;
  line-height: 32px;
  color: #3b426c;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
`;

export default function() {
  return (
    <Wrapper id="review">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Title>Отзывы</Title>
          </div>
          <div className="col-xs-12">
            <img src="" alt="" />
            <Name>Ксенья, 20 лет</Name>
            <City>Владивосток</City>
          </div>
          <div className="col-xs-12">
            <Question>
              <SubTitle>Чем занималась?</SubTitle>
              <p>
                💭 Совмещала учебу в&nbsp;университете и&nbsp;работу менеджера в
                фитнес-клубе, всегда мечтала путешествовать, но&nbsp;финансов не
                хватало. Однажды услышала от&nbsp;подруги о&nbsp;работе хостес
                в&nbsp;Корее и задумалась поехать подработать на&nbsp;каникулах.
                Через пол года мы поехали с&nbsp;подругой на&nbsp;месяц.
                Но&nbsp;все&nbsp;же главной моей целью была не работа,
                а&nbsp;путешествие в&nbsp;другую страну. Мой первый раз
                заграницей, у&nbsp;меня была полная эйфория&nbsp;&mdash;
                я&nbsp;влюбилась в&nbsp;страну и&nbsp;людей. Главным плюсом
                было&nbsp;то, что билеты не&nbsp;надо было покупать самой и
                проживание бесплатное. Когда нас поселили в&nbsp;квартиру,
                я&nbsp;была удивлена: все было настолько &laquo;сделано для
                людей&raquo;, все магазины рядом.
              </p>
            </Question>
          </div>
          <div className="col-xs-12">
            <Question>
              <SubTitle>Что понравилось?</SubTitle>
              <p>
                Мне было весело работать в&nbsp;клубе, и&nbsp;работа мне
                действительно нравилась: весело, каждый день вечеринки, караоке.
                Я&nbsp;поняла, что мне этого очень давно не&nbsp;хватало,
                а&nbsp;такая работа помогла мне развеяться. Я&nbsp;не&nbsp;могу
                сказать, что мне в&nbsp;работе что-то не нравилось. Был,
                конечно, дискомфорт в&nbsp;общении с&nbsp;гостями, но
                спасало&nbsp;то, что всегда можно было увлечь гостя песнями
                и&nbsp;танцами, играми. В&nbsp;общем, в&nbsp;любой ситуации
                можно было найти выход, главное мозги включать 😂 Девочки разные
                попадаются тоже, с&nbsp;которыми живёшь и&nbsp;работаешь,
                но&nbsp;в&nbsp;целом со&nbsp;всеми находила общий язык.
              </p>
            </Question>
          </div>
          <div className="col-xs-12">
            <Question>
              <SubTitle>Какие были опасения?</SubTitle>
              <p>
                Больше всего боялась, когда летела, что отберут паспорт.
                Девочки, будьте разумнее: 21&nbsp;век на&nbsp;дворе, рабство
                давно отменили😂🙈 Я поняла, что для первого контракта лучше
                выбрать Корею&nbsp;&mdash; одну из самых безопасных стран.
              </p>
            </Question>
          </div>
          <div className="col-xs-12">
            <Question>
              <SubTitle>Какие были опасения?</SubTitle>
              <p>
                Я&nbsp;встретила свою любовь 💕 Страна меня полностью меня
                поглотила, я сделала визу и&nbsp;осталась, живу уже пол года
                рядом с&nbsp;Сеулом. Сейчас, правда, я&nbsp;не&nbsp;работаю
                в&nbsp;клубе, но&nbsp;учу корейский язык и&nbsp;готовлюсь к
                поступлению в&nbsp;университет уже в&nbsp;Корее. Я&nbsp;поняла,
                что всегда стоит верить в&nbsp;свои силы и&nbsp;ничего
                не&nbsp;бояться✈️
              </p>
            </Question>
          </div>
          <div className="col-xs-12">
            <img src="" alt="" />
            <Name>Ксенья, 20 лет</Name>
            <City>Владивосток</City>
          </div>
          <div className="col-xs-12">
            <Question>Вопрос</Question>
            <p>
              💭 Совмещала учебу в&nbsp;университете и&nbsp;работу менеджера в
              фитнес-клубе, всегда мечтала путешествовать, но&nbsp;финансов не
              хватало. Однажды услышала от&nbsp;подруги о&nbsp;работе хостес
              в&nbsp;Корее и задумалась поехать подработать на&nbsp;каникулах.
              Через пол года мы поехали с&nbsp;подругой на&nbsp;месяц.
              Но&nbsp;все&nbsp;же главной моей целью была не работа,
              а&nbsp;путешествие в&nbsp;другую страну. Мой первый раз
              заграницей, у&nbsp;меня была полная эйфория&nbsp;&mdash;
              я&nbsp;влюбилась в&nbsp;страну и&nbsp;людей. Главным плюсом
              было&nbsp;то, что билеты не&nbsp;надо было покупать самой и
              проживание бесплатное. Когда нас поселили в&nbsp;квартиру,
              я&nbsp;была удивлена: все было настолько &laquo;сделано для
              людей&raquo;, все магазины рядом.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
