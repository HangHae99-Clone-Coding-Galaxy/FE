import React from "react";
import Login from "./Login";
import Cart from "./Cart";
import AllCourses from "../pages/AllCourses";
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderWrap>
      <h1>코딩갤럭시</h1>
      <p>home</p>
      <AllCourses />
      <Login />
      <Cart />
    </HeaderWrap>
  );
};

export default Header;

export const HeaderWrap = styled.div`
width: 1400px;
height: 200px;
display: flex;
flex-direction: row;
margin: 20px;
`
