import React, { useState } from "react";
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

  const logins = useSelector((state) => state.userSlice);

  const clickHandler = async () => {
    dispatch(__setUser(login));
    navigate("/");
  };

  const register = () => {
    navigate("/register");
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
  return (
    <ModalContainer>
      <Modal>
        <Box onSubmit={(e) => handleAddUsers(e)}>
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
            id="email"
            name="email"
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
        </Box>
        <ul>
          <li>
            <LoginButton type="submit" onClick={clickHandler}>
              로그인
            </LoginButton>
          </li>
          <li>
            <RegisterButton
              onClick={() => {
                dispatch(closeModal());
                register();
              }}
            >
              10초 회원가입
            </RegisterButton>
          </li>
          <Kakao>
            <img src="../img/kakao.png"></img>
          </Kakao>
        </ul>
      </Modal>
    </ModalContainer>
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
  padding: 30px;
  box-sizing: border-box;
`;
const H3 = styled.h3`
  font-size: 16px;
`;
const Close = styled.div`
  cursor: pointer;
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
