import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Register = () => {
  return (
    <Section>
      <PageTitle>
        <Ul>
          <Li>홈</Li>
          <Li>회원가입</Li>
        </Ul>
      </PageTitle>
    </Section>
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
const Ul = styled.div``;
const Li = styled.div``;
