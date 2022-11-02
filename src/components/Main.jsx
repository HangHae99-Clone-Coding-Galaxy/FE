import React from "react";
import styled from "styled-components";
import { SiBookstack } from "react-icons/si";
import AllCourses from "../pages/AllCourses";

const Main = () => {
  return (
    <>
      <MainWrap>
        <img src="img/main.png" alt="" />
        <H3>
          포트폴리오 완성까지 책임지는 <br />
          Online 프로그래밍 강좌
        </H3>
        <br />
        <H4>
          코딩애플 <span>온라인 과정</span> 개강! <br /> 기초부터 실무까지
          단기완성으로!
        </H4>
        <Courses>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>React</span>
          <Div />
          <span>Node.js</span>
          <span>Python</span>
          <span>Deep Learning</span>
        </Courses>
        <Button>
          강의목록보기
          <SiBookstack
            style={{ fill: "#fff", fontSize: "15px", marginBottom: "-3px" }}
          />
        </Button>
      </MainWrap>
      <MainContainer>
        <img src="img/package.png" alt="" />
      </MainContainer>
      <Guide>
        <img src="img/guide.png" alt="" />
      </Guide>
      <AllCourses />
      <Flex>
        <div>
          <h4>
            <span>
              “나는 웹개발자 하러 왔는데 <Br /> 왜 구구단 계산기를 만들어야
              하죠?”
            </span>
            <Div />
            책에서 재미없는 문법예제만 따라해봤다면 <Br /> 코딩애플에서 프로젝트
            중심 커리큘럼으로 다시 시작해보세요!
            <Div />
            의미없는 숫자놀음 예제보다는 <Br /> 첫날부터 웹을 개발해보며
            배워보는 실전 프로그래밍!
          </h4>
        </div>
        <div>
          <img src="img/explain.png" alt="" />
        </div>
      </Flex>
    </>
  );
};

export default Main;

const MainWrap = styled.div`
  position: relative;
  & img {
    display: flex;
    justify-content: center;
    margin: auto;
    max-width: 1410px;
    width: 98%;
  }
`;
const H3 = styled.h3`
  position: absolute;
  top: 20%;
  left: 29%;
  transform: translate(-50%, -50%);
  font-size: 25.2px;
  font-weight: 600;
`;
const H4 = styled.h4`
  position: absolute;
  top: 30%;
  left: 27.4%;
  transform: translate(-50%, -50%);
  font-size: 17px;
  font-weight: 400;
  & span {
    color: crimson;
  }
`;
const Courses = styled.div`
  position: absolute;
  top: 42%;
  left: 27.4%;
  transform: translate(-50%, -50%);
  & span {
    padding: 2px 4px;
    color: #fff;
    background-color: #333;
    border-radius: 3px;
    font-size: 15.3px;
    margin: 0 2px;
  }
`;
const MainContainer = styled.div`
  background-color: #532f8e;
  margin-top: -16px;
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
const Div = styled.div`
  margin-bottom: 10px;
`;
const Br = styled.div`
  margin-bottom: 5px;
`;
const Button = styled.div`
  position: absolute;
  top: 55%;
  left: 25.2%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  line-height: 2em;
  padding: 8px 16px;
  background: #ff5555;
  color: #fff;
  margin: 5px 5px 5px 0;
  border-radius: 6px;
  &:hover {
    background: #f14040;
  }
`;
const Guide = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  & img {
    width: 300px;
    height: 65px;
    cursor: pointer;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1410px;
  margin: 100px auto 50px auto;
  & img {
    width: 501px;
    height: 371px;
  }
  & span {
    font-size: 18px;
    font-family: "Gungsuh" !important;
  }
  & p {
    font-size: 16px;
  }
`;
