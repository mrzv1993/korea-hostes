import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #f6f8ff;
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

export default function() {
  return (
    <Wrapper id="salary">
      <div className="container">
        <div className="row">
          <Title>График работы и заработная плата</Title>
          <div className="col-xs-12 col-lg-4">asd</div>
          <div className="col-xs-12 col-lg-8">a1111sd</div>
        </div>
      </div>
    </Wrapper>
  );
}
