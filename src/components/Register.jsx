import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Register = () => {
  return (
    <>
      <Section>
        <Container>
          <PageTitle>
            <Ul>
              <Li>홈</Li>/<Li>회원가입</Li>
            </Ul>
            <H1>회원가입</H1>
          </PageTitle>
        </Container>
      </Section>
      <Page></Page>
    </>
  );
};

export default Register;

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
const Ul = styled.div`
  font-size: 11px;
  display: flex;
`;
const Li = styled.div`
  margin: 0 10px;
`;
const H1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
`;
const Page = styled.div``;
