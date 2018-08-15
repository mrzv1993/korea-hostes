import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #fff;
`;

const Form = props => {
  return (
    <Wrapper id="steps">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <script src="https://yastatic.net/q/forms-frontend-biz/_/embed.js" />
            <iframe
              src="https://connect.yandex.ru/forms/5b72119c2fc07d00aead8eb0/?iframe=1"
              frameborder="0"
              name="ya-form-5b72119c2fc07d00aead8eb0"
              width="650"
              height="920"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Form;
