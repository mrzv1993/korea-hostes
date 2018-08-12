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
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #3b426c;
  margin-bottom: 4px;
`;

const Answer = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #3b426c;
  margin-bottom: 4px;
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
            <Question>Вопрос</Question>
            <Answer>
              💭 Совмещала учебу в университете и работу менеджера в
              фитнес-клубе, всегда мечтала путешествовать, но финансов не
              хватало. Однажды услышала от подруги о работе хостес в Корее и
              задумалась поехать подработать на каникулах. Через пол года мы
              поехали с подругой на месяц. Но все же главной моей целью была не
              работа, а путешествие в другую страну. Мой первый раз заграницей,
              у меня была полная эйфория - я влюбилась в страну и людей. Главным
              плюсом было то, что билеты не надо было покупать самой и
              проживание бесплатное. Когда нас поселили в квартиру, я была
              удивлена: все было настолько «сделано для людей», все магазины
              рядом.
            </Answer>
          </div>
          <div className="col-xs-12">
            <Question>Вопрос</Question>
            <Answer>
              Мне было весело работать в клубе, и работа мне действительно
              нравилась: весело, каждый день вечеринки, караоке. Я поняла, что
              мне этого очень давно не хватало, а такая работа помогла мне
              развеяться. Я не могу сказать, что мне в работе что-то не
              нравилось. Был, конечно, дискомфорт в общении с гостями, но
              спасало то, что всегда можно было увлечь гостя песнями и танцами,
              играми. В общем, в любой ситуации можно было найти выход, главное
              мозги включать 😂 Девочки разные попадаются тоже, с которыми
              живёшь и работаешь, но в целом со всеми находила общий язык.
            </Answer>
          </div>
          <div className="col-xs-12">
            <Question>Вопрос</Question>
            <Answer>
              Больше всего боялась, когда летела, что отберут паспорт. Девочки,
              будьте разумнее: 21 век на дворе, рабство давно отменили😂🙈 Я
              поняла, что для первого контракта лучше выбрать Корею - одну из
              самых безопасных стран.
            </Answer>
          </div>
          <div className="col-xs-12">
            <Question>Вопрос</Question>
            <Answer>
              Я встретила свою любовь 💕 Страна меня полностью меня поглотила, я
              сделала визу и осталась, живу уже пол года рядом с Сеулом. Сейчас,
              правда, я не работаю в клубе, но учу корейский язык и готовлюсь к
              поступлению в университет уже в Корее. Я поняла, что всегда стоит
              верить в свои силы и ничего не бояться✈️
            </Answer>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
