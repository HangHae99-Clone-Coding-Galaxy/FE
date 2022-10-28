import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Cart = () => {


  const navigate = useNavigate();

  const main = () => {
    navigate("/");
  };
  return (
    <>
      <Section>
        <Container>
          <PageTitle>
            <Ul>
              <Li onClick={main}>홈</Li>/<Li>신청하기</Li>
            </Ul>
            <H1>신청하기</H1>
            <H5>Step 1 : 강의선택</H5>
          </PageTitle>
        </Container>
      </Section>
    </>
  );
;


export default Cart;

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
const H5 = styled.h5`
  font-size: 16.8px;
  margin: 20px 10px;
`;
