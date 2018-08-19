import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const Wrapper = styled.div`
  background-color: #fff5f5;
  padding: 16px 0;
  color: #685580;
`;

const NavHeader = styled.div`
  justify-content: space-between;
  align-items: center
  display: flex;
  justify-content: center;

    @media (min-width: 991px) {
    justify-content: space-between;
    }
`;

const Nav = styled.nav`
  justify-content: space-between;
  align-items: center;
  display: none;

  @media (min-width: 991px) {
    display: flex;
  }
`;

const CustomLink = styled(Link)`
  margin-left: 24px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 1.5px;
  color: #3a416f;
  transition: 0.16s ease-in-out;

  &:hover {
    color: #ff7e63;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  border-radius: 56px;
  border: none;
  padding: 16px 24px;
  font-size: 11px;
  letter-spacing: 1.5px;
  color: #fff5f5;
  cursor: pointer;
  transition: 0.16s ease-in-out;
  background: linear-gradient(90deg, #ff8c8c 0%, #ffb0b1 100%);
  box-shadow: 0px 4px 8px rgba(104, 85, 128, 0.08);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 16px rgba(104, 85, 128, 0.16);
  }
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <NavHeader>
          <h2>mia agency</h2>
          <Nav>
            <CustomLink smooth to="#care">
              Бесплатно
            </CustomLink>
            <CustomLink smooth to="#demands">
              Требования
            </CustomLink>
            <CustomLink smooth to="#salary">
              Зарплата
            </CustomLink>
            <CustomLink smooth to="#review">
              Отзывы
            </CustomLink>
            <CustomLink smooth to="#mail">
              <Button>Заполнить анкету</Button>
            </CustomLink>
          </Nav>
        </NavHeader>
      </div>
    </Wrapper>
  );
}
