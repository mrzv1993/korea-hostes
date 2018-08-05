import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff5f5;
  padding: 16px 0;
  color: #685580;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
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
        <Nav>
          <h2>mia agency</h2>
          <nav>
            <Link href="#">О нас</Link>
            <Link href="#">Описание</Link>
            <Link href="#">Требования</Link>
            <Link href="#">Зарплата</Link>
            <Link href="#">Отзывы</Link>
            <Link href="#">
              <Button>Заполнить анкету</Button>
            </Link>
          </nav>
        </Nav>
      </div>
    </Wrapper>
  );
}
