import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #fcfdff;
  color: #5e6590;
  font-weight: 400;
  line-height: 1.56;
  padding: 160px 0;
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 56px;
  font-weight: 400;
  color: #fd9480;
  line-height: 1.24;

  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #666f95;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Hero = styled.div`
  background: linear-gradient(
    160deg,
    rgba(249, 220, 212, 1) 32%,
    rgba(255, 169, 169, 1) 100%
  );
  border-radius: 8px;
  padding: 56px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 8px;
  }
`;

const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(49, 58, 94, 0.08);
  border-radius: 4px;
  border: none;
  padding: 16px 24px;
  max-height: 48px;
  width: 100%;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 33%;
    margin-bottom: 0px;
    margin-left: 8px;
  }
`;

const Button = styled.button`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  color: #ffffff;
  background: #6664f4;
  box-shadow: 0px 4px 8px rgba(49, 58, 94, 0.08);
  border-radius: 4px;
  border: none;
  padding: 16px 24px;
  max-height: 48px;
  width: 100%;

  @media (min-width: 768px) {
    text-align: left;
    width: auto;
    margin-left: 8px;
  }
`;

// export default function() {
//   return (
//     <Wrapper id="mail">
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-12">
//             <Hero>
//               <Title>Открывайте для себя новые возможности и страны</Title>
//               <p>Оставьте номер телефона, чтобы перейти к заполнению анкеты</p>
//               <Form
//                 method="POST"
//                 action="https://formspree.io/xxmrzv@gmail.com"
//               >
//                 <input
//                   type="hidden"
//                   name="_next"
//                   value="https://miawork.ru/form"
//                 />
//                 <input
//                   type="hidden"
//                   name="_cc"
//                   value="MiaAgencyKorea@gmail.com"
//                 />
//                 <input type="hidden" name="_language" value="ru" />

//                 <Input type="text" name="Имя" placeholder="Имя" />

//                 <Input type="text" name="Контакт" placeholder="Контакт" />

//                 <Button type="submit">Продолжить</Button>
//               </Form>
//             </Hero>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

export default function() {
  return (
    <Wrapper id="mail">
      <div className="container">
        <Hero>
          <Title>Открывайте для себя новые возможности и страны</Title>
          <SubTitle>Открывайте для себя новые возможности и страны</SubTitle>
          <Form method="POST" action="https://formspree.io/xxmrzv@gmail.com">
            <input type="hidden" name="_next" value="https://miawork.ru/form" />
            <input type="hidden" name="_cc" value="MiaAgencyKorea@gmail.com" />
            <input type="hidden" name="_language" value="ru" />
            <Input type="text" name="Имя" placeholder="Имя" />
            <Input type="text" name="Контакт" placeholder="Контакт" />
            <Button type="submit">Продолжить</Button>
          </Form>
        </Hero>
      </div>
    </Wrapper>
  );
}
