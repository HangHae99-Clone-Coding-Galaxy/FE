import React from "react";
import styled from "styled-components";
import { FaSearch, FaCartPlus } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <Headers className="sleek">
        <Container>
          <Flex>
            <Logo src="img/logo2-3.png"></Logo>
            <Nav>
              <Ul>
                <Li>
                  <strong>HOME</strong>
                </Li>
                <Li>
                  <strong>교육과정</strong>
                </Li>
                <Li>
                  <strong>
                    <FaSearch />
                  </strong>
                </Li>
              </Ul>
            </Nav>
            <div>
              <Ul>
                <Li>
                  <Span>로그인</Span>
                </Li>
                <Li>
                  <Span>
                    <FaCartPlus />
                  </Span>
                </Li>
              </Ul>
            </div>
          </Flex>
        </Container>
      </Headers>
    </>
  );
};

export default Header;

const Headers = styled.div`
  border-bottom: 1px solid #dddddd;
  font-size: 13px;
  font-weight: 600;
  & strong {
    cursor: pointer;
  }
`;

const Container = styled.div`
  max-width: 1380px;
  height: 74.563px;
  margin: auto;
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
const Logo = styled.img`
  margin-top: 24px;
  width: 136px;
  height: 24px;
  cursor: pointer;
`;
const Nav = styled.nav`
  margin-top: 12px;
  margin-left: 400px;
  width: 252.984px;
  height: 74.563;
`;
const Flex = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const Ul = styled.ul`
  display: flex;
  margin: auto;
  list-style: none;
`;
const Li = styled.li`
  margin: 17px;
`;
const Span = styled.li`
  margin-top: 14px;
  cursor: pointer;
`;
