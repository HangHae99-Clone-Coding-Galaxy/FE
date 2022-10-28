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
          <ul>
            <li>
              <LoginButton type="submit" onClick={clickHandler}>
                로그인
              </LoginButton>
            </li>
            <li>
              <RegisterButton onClick={register}>10초 회원가입</RegisterButton>
            </li>
          </ul>
        </Box>
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
  background-color: #ffffff;
  max-width: 300px;
  height: 360px;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
`;
const Box = styled.form``;
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
  width: 300px;
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
  background-color: #fff;
`;
const RegisterButton = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
`;
