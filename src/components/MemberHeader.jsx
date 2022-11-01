import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MemberHeader = () => {
  const navigate = useNavigate();
  const profile = () => {
    navigate("/members");
  };
  const profileEdit = () => {
    navigate("/membersEdit");
  };
  const orderList = () => {
    navigate("/orderList");
  };
  const myReviewList = () => {
    navigate("/myReviewList");
  };
  return (
    <Section>
      <Container>
        <Flex>
          <Img
            src="https://i.pinimg.com/originals/d2/4f/89/d24f89d6afaec9d3a55d47fed799800e.jpg"
            alt=""
          />
          <H1>오성은</H1>
        </Flex>
      </Container>
      <Row>
        <ItemListOne>
          <div>
            <ul>
              <li onClick={profile}>프로필</li>
              <li onClick={orderList}>결제 내역</li>
              <li onClick={myReviewList}>작성 리뷰</li>
              <li onClick={profileEdit}>편집</li>
            </ul>
          </div>
        </ItemListOne>
      </Row>
    </Section>
  );
};

export default MemberHeader;

const Section = styled.div``;
const Container = styled.div`
  width: 1410px;
  display: flex;
  padding: 30px 0;
  margin: auto;
`;
const Row = styled.div`
  width: 1410px;
  display: flex;
  margin: auto;
`;

const Flex = styled.div`
  display: flex;
`;
const Img = styled.img`
  border-radius: 100%;
  width: 50px;
  height: 50px;
`;
const H1 = styled.h1`
  font-size: 20px;
  color: #c9c9c9;
  margin-top: 10px;
  margin-left: 15px;
  font-weight: 600;
`;
const ItemListOne = styled.div`
  width: 1410px;
  border-radius: 8px;
  padding: 5px 0;
  border: none;
  background: #f7f7f7;
  padding-left: 7px;
  display: flex;
  margin: auto;
  & ul {
    display: flex;
  }
  & li {
    margin-right: 20px;
    padding: 15px;
    font-size: 11px;
    cursor: pointer;
    font-weight: 600;
  }
  & li:hover {
    color: #ff4949;
  }
`;
