import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Members = () => {
  const navigate = useNavigate();
  const profile = () => {
    navigate("/members");
  };
  const profileEdit = () => {
    navigate("/membersEdit");
  };
  return (
    <>
      <Section>
        <Container>
          <Flex>
            <Img src="img/user.png" alt="" />
            <H1>오성은</H1>
          </Flex>
        </Container>
        <Row>
          <ItemListOne>
            <div>
              <ul>
                <li onClick={profile}>프로필</li>
                <li onClick={profileEdit}>편집</li>
                <li>설정</li>
              </ul>
            </div>
          </ItemListOne>
        </Row>
        <List>
          <ItemListTwo>
            <div>
              <ul>
                <li>이름</li>
                <li>오성은</li>
              </ul>
            </div>
          </ItemListTwo>
        </List>
      </Section>
    </>
  );
};

export default Members;
const Section = styled.div`
  padding-bottom: 281px;
`;
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
const List = styled.div`
  width: 1410px;
  display: flex;
  padding: 20px 0;
  margin: auto;
`;

const Flex = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
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
const ItemListTwo = styled.div`
  width: 1410px;
  border-radius: 8px;
  padding: 0px;
  padding-left: 7px;
  display: flex;
  margin: auto;

  & ul {
    display: flex;
  }
  & li {
    margin-right: 20px;
    padding: 15px;
    font-size: 16px;
  }
`;
