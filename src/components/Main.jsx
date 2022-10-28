import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <img src="img/package.png" alt="" />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  background-color: #532f8e;
  & img {
    width: 621px;
    height: 650px;
    padding-top: 40px;
    padding-bottom: 55px;
    display: flex;
    justify-content: center;
    margin: auto;
  }
`;
