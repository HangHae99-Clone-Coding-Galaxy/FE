import React from "react";
import styled from "styled-components";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modalSlice";
import Login from "./Login";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("accessToken");
  const isOpen = useSelector((state) => state.modalSlice.isOpen);

  const toLogin = () => {
    if (token) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };
  const main = () => {
    navigate("/");
  };
  const cart = () => {
    navigate("/cart");
  };
  return (
    <>
      {isOpen && <Login />}
      <Headers className="sleek">
        <Container>
          <Flex>
            <Logo src="img/logo2-3.png" onClick={main}></Logo>
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
              <LoginUl>
                <Li>
                  <Span
                    onClick={() => {
                      dispatch(openModal());
                      toLogin();
                    }}
                  >
                    {token ? "로그아웃" : "로그인"}
                  </Span>
                </Li>
                <Li onClick={cart}>
                  <FaCartPlus />
                  {/* <CartQuantity> */}
                  {/* <span>3</span> */}
                  {/* </CartQuantity> */}
                </Li>
              </LoginUl>
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
const LoginUl = styled.ul`
  display: flex;
  margin: auto;
  list-style: none;
  & li:nth-child(2) {
    margin-top: 30px;
    cursor: pointer;
  }
`;
const Li = styled.li`
  margin: 17px;
`;
const Span = styled.div`
  cursor: pointer;
  margin-top: 14px;
`;
// const CartQuantity = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 16px;
//   width: 12px;
//   background: #ff4949;
//   border-radius: 2px;
//   & span {
//     color: #fff;
//   }
// `;
