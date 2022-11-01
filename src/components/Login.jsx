import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { __setUser } from "../features/userSlice";
import { closeModal } from "../features/modalSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const close = () => {
    navigate("/");
  };

  const logins = useSelector((state) => state.userSlice.users);

  const signup = () => {
    navigate("/signup");
  };

  const [login, setLogin] = useState({
    userId: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleAddUsers = (e) => {
    e.preventDefault();
    dispatch(__setUser(login));
    setLogin({
      userId: "",
      password: "",
    });
  };

  // const REST_API_KEY = "fdda33954998532f3179db62556d362f";
  // const REDIRECT_URI = "http://localhost:3000/api/member/kakao/callback";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const restApiKey = "fdda33954998532f3179db62556d362f";

  const redirectUrl = "http://localhost:3000/api/member/kakao/callback";

  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUrl}&response_type=code`;

  function loginHandler() {
    window.location.href = kakaoAuthUrl;
  }

  return (
    <>
      <ModalContainer>
        <Modal>
          <Box onSubmit={(e) => handleAddUsers(e)}>
            <Div>
              <Flex>
                <H3>로그인</H3>
                <Close
                  onClick={() => {
                    dispatch(closeModal());
                  }}
                >
                  <IoIosClose />
                </Close>
              </Flex>
              <Input
                id="userId"
                name="userId"
                type="email"
                placeholder="아이디"
                onClick={onChangeHandler}
              />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호"
                onClick={onChangeHandler}
              />
            </Div>
            <ul>
              <li>
                <LoginButton type="submit">로그인</LoginButton>
              </li>
              <li>
                <RegisterButton
                  onClick={() => {
                    dispatch(closeModal());
                    signup();
                  }}
                >
                  10초 회원가입
                </RegisterButton>
              </li>
              <Kakao onClick={loginHandler}>
                {/* <a href={KAKAO_AUTH_URL}> */}
                <img src="../img/kakao.png"></img>
                {/* </a> */}
              </Kakao>
            </ul>
          </Box>
        </Modal>
      </ModalContainer>
    </>
  );
};

export default Login;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  width: 360px;
  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  text-align: center;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
`;
const Box = styled.form`
  box-sizing: border-box;
`;
const H3 = styled.h3`
  font-size: 16px;
`;
const Close = styled.div`
  cursor: pointer;
`;
const Div = styled.div`
  padding: 30px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  & div {
    font-size: 30px;
    margin-top: -8px;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #eee;
  font-size: 16px;
  resize: none;
  margin-bottom: 10px;
`;
const LoginButton = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 13px;
  background: #ff3e3e;
  width: 100%;
  border: none;
  border-radius: 0;
  padding: 15px;
  text-transform: uppercase;
  display: inline-block;
  opacity: 0.9;
  height: 48px;
`;
const RegisterButton = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 13px;
  background-color: #3a3a3a;
  width: 100%;
  border: none;
  border-radius: 0;
  padding: 15px;
  text-transform: uppercase;
  display: inline-block;
  opacity: 0.9;
  height: 48px;
`;
const Kakao = styled.li`
  cursor: pointer;
  background-color: #fee500;
`;
