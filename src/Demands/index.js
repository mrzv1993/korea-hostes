import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

import girl from "./girl.svg";
import sakura from "./sakura.svg";

const Wrapper = styled.section`
  height: 896px;
  width: 100%;
  position: relative;
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

const Red = styled.div`
  background-color: #fcfdff;
  background-image: url(${girl});
  background-repeat: no-repeat;
  background-position: top left;
  width: 50%;
  height: 100%;
`;

const Sakura = styled.div`
  background-image: url(${sakura});
  background-repeat: no-repeat;
  background-position: bottom right;
  width: 100%;
  height: 100%;
`;

export default function() {
  return (
    <Wrapper>
      <Bg>
        <Blue />
        <Red />
      </Bg>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-6 z-1">
            <p>
              Мы ищем общительных девушек с приятной внешностью от 18 до 32-х
              лет, ростом не выше 180 сантиметров.*
            </p>
            <h2>
              Претендентки на должность хостес должны соответствовать следующим
              критериям:
            </h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
