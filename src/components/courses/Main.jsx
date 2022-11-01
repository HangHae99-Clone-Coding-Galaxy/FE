import React from "react";
import AllCourses from "../../pages/AllCourses";
import Review from "../Review";
import styled from "styled-components";
import ReviewListItem from "../ReviewListItem";
import ReviewList from "../ReviewList";

const Main = () => {
  return (
    <MainWrap>
      <AllCourses />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  background: transparent;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  gap: 10px;
`;
