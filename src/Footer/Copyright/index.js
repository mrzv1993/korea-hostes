import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f6f8ff;
  padding: 40px 0;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #717790;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row between-xs">
          <div className="col-xs-12 col-md-6">
            © 2018 Mia Agency. Все права защещины.
          </div>
          <div className="col-xs-12 col-md-6 end-xs">
            Дизайн и разработка сайта — <a href="/">mrzv.design</a> 🌚 🌝
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
