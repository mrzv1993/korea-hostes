import React from "react";
import styled from "styled-components";

import girl from "./girl.svg";
import sakura from "./sakura.svg";
import bullet from "./bullet.svg";

const Wrapper = styled.section`
  height: 1123px;
  width: 100%;
  position: relative;
  background-color: #fcfdff;
  color: #5e6590;
  font-weight: 400;
  line-height: 1.56;
  padding-top: 128px;
`;

const List = styled.div`
  max-width: 600px;
`;

const Bg = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Blue = styled.div`
  width: 50%;
  height: 100%;
`;

const Girl = styled.div`
  background-color: #fcfdff;
  background-image: none;
  background-repeat: no-repeat;
  background-position: top left;
  width: 50%;
  height: 100%;
  display: block;

  @media (min-width: 768px) {
    background-image: url(${girl});
  }
`;

const Sakura = styled.div`
  background-image: url(${sakura});
  background-repeat: no-repeat;
  background-position: bottom right;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #3b426c;
  margin-bottom: 16px;
  margin-top: 24px;
`;

const Bullet = styled.li`
  display: inline-block;
  position: relative;
  padding-left: 24px;
  padding-top: 16px;

  &::before {
    content: url(${bullet});
    margin-left: -24px;
    margin-top: 16px;
    top: 3px;
    position: absolute;
    transition: 0.4s ease-in-out;
  }
`;

export default function() {
  return (
    <Wrapper id="demands">
      <Bg>
        <Blue />
        <Girl data-aos="fade-left" />
        <Sakura data-aos="fade-up-left" />
      </Bg>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-6 z-1">
            <List>
              <p>
                Мы ищем общительных девушек с приятной внешностью <br />
                от 18 до 32-х лет, ростом не выше 180 сантиметров.
              </p>
              <Title>
                Претендентки на должность хостес <br />
                должны соответствовать следующим критериям:
              </Title>
              <ul>
                <Bullet>
                  привлекатьльная внешность и хорошая <br />
                  физическая форма;
                </Bullet>
                <Bullet>
                  красивый голос, грамотная речь <br />и отсутствие дефектов
                  дикции;
                </Bullet>
                <Bullet>общительность и доброжилательность;</Bullet>
                <Bullet>стрессоустойчевость и внимательность</Bullet>
              </ul>
            </List>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
