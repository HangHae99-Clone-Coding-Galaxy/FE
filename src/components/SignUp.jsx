import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __addUser } from "../features/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const main = () => {
    navigate("/");
  };

  const init = {
    userid: "",
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
  };

  const [user, setUser] = useState(init);
  console.log(user);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__addUser(user));
    setUser(init);
  };
  return (
    <>
      <Section>
        <Container>
          <PageTitle>
            <Ul>
              <Li onClick={main}>홈</Li>/<Li>회원가입</Li>
            </Ul>
            <H1>회원가입</H1>
          </PageTitle>
        </Container>
      </Section>
      <Container>
        <Page>
          <p>(주의) 이메일주소 잘 입력하십시오 오타나면 큰일남</p>
          <SignUpForm onSubmit={onSubmitHandler}>
            <label htmlFor="signup_username">아이디 * </label>
            <input
              type="text"
              name="userid"
              id="userid"
              required
              value={user.userid}
              onChange={(e) => onChangeHandler(e)}
            ></input>
            <label htmlFor="signup_username">이메일 주소 * </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={user.email}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="signup_username">비밀번호 입력 * </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="signup_username">비밀번호 재입력 * </label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              required
              value={user.passwordConfirm}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="nickname">이름 * </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={user.username}
              onChange={(e) => onChangeHandler(e)}
            />
            <br />
            <input
              type="submit"
              name="signup_submit"
              id="signup_submit"
              value="가입완료"
            />
          </SignUpForm>
        </Page>
      </Container>
    </>
  );
};

export default SignUp;

const Section = styled.div`
  background: #fafafa;
  padding-bottom: 30px;
`;
const PageTitle = styled.div`
  padding-top: 30px;
`;
const Container = styled.div`
  width: 1200px;
  margin: auto;
`;
const Ul = styled.ul`
  & li:nth-child(1) {
    cursor: pointer;
  }
  font-size: 11px;
  display: flex;
`;
const Li = styled.li`
  margin: 0 10px;
`;
const H1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
`;
const SignUpForm = styled.form`
  & label {
    display: block;
    font-weight: 700;
    margin: 20px 0 10px;
  }
  & input {
    width: 70%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    color: #313b3d;
    font: inherit;
    font-size: 100%;
    padding: 12px;
    margin-bottom: 10px;
  }
  & input:nth-child(12) {
    background-color: #fff;
    border-color: #ff4949;
    color: #ff4949;
    border-width: 1px;
    padding: 15px 0;
    margin: 10px 0;
    border-radius: 5px;
    width: 100px;
    font-size: 11px;
    font-weight: 600;
    &:hover {
      background-color: #ff4949;
      color: #fff;
    }
  }
`;
const Page = styled.div`
  margin: 30px 10px;
`;
const SignUpButton = styled.div``;
