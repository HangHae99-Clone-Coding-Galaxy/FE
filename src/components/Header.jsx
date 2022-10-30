import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal, openSearchModal } from "../features/modalSlice";
import Login from "./Login";
import Search from "./Search";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("accessToken");
  const isOpen = useSelector((state) => state.modalSlice.isOpen);
  const searchOpen = useSelector((state) => state.modalSlice.searchOpen);

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
  const search = () => {
    navigate("/search");
  };
  const mypage = () => {
    navigate("/members");
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
                <Li onClick={main}>
                  <strong>HOME</strong>
                </Li>
                <Li
                  onClick={() => {
                    navigate("/allcourses");
                  }}
                >
                  <strong>교육과정</strong>
                </Li>
                <Li>
                  <strong
                    onClick={() => {
                      navigate("/create");
                    }}
                  >
                    등록하기
                  </strong>
                </Li>
                <Li>
                  <strong>
                    <FaSearch
                      onClick={() => {
                        dispatch(openSearchModal());
                        search();
                      }}
                    />
                  </strong>
                </Li>
              </Ul>
            </Nav>
            <div>
              <LoginUl>
                <Li>
                  <Flex>
                    <Img
                      src="https://i.pinimg.com/originals/d2/4f/89/d24f89d6afaec9d3a55d47fed799800e.jpg"
                      alt=""
                      onClick={mypage}
                    />
                    <Span
                      onClick={() => {
                        dispatch(openModal());
                        toLogin();
                      }}
                    >
                      {token ? "로그아웃" : "로그인"}
                    </Span>
                  </Flex>
                </Li>
                <Li onClick={cart}>
                  <FaCartPlus />
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
  max-width: 1410px;
  height: 74.563px;
  margin: auto;
  margin-top: 8px;
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
  & li :hover {
    color: #ff4949;
  }
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
    margin-top: 28px;
    cursor: pointer;
  }
`;
const Li = styled.li`
  margin: 13px;
`;
const Span = styled.div`
  cursor: pointer;
  margin-top: 15px;
`;
const Img = styled.img`
  border-radius: 100%;
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-right: 15px;
  cursor: pointer;
`;
