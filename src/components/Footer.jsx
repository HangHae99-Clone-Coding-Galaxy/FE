import React from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

const Footer = () => {
  return (
    <Wrap>
      <Footers>
        <Container>
          <Row>
            <FooterTop>
              <FooterBottom>
                <div>
                  <H4>ABOUT</H4>
                  <br />
                  <p>
                    취준생, 디자이너, 현직 개발자 등 현재 월 700명 수강중입니다.
                  </p>
                  <br />
                  <br />
                  <p>
                    <FaPhoneAlt style={{ fill: "#fff" }} />
                    &nbsp;(09:00~20:00) 빠른 상담은 카톡 플러스친구
                    <Span> 코딩애플 (링크)</Span>
                  </p>
                  <br />
                  <p>
                    <MdEmail style={{ fill: "#fff", fontSize: "16px" }} />
                    &nbsp;admin@codingapple.com
                  </p>
                  <br />
                  <Span>
                    <IoIosPaper style={{ fill: "#fff", fontSize: "16px" }} />
                    &nbsp;이용약관
                  </Span>
                  <br />
                  <br />
                  <p>ⓒ Codingapple, 강의 예제 복사 금지 </p>
                </div>
                <a href="https://pf.kakao.com/_DLZzd">
                  <Img src="img/info1.png" />
                </a>
              </FooterBottom>
            </FooterTop>
          </Row>
        </Container>
      </Footers>
      <FooterBottomContainer>
        <div className="row">
          <div className="col-md-3">
            <Flex>
              <h2 id="footerlogo">
                <a href="https://codingapple.com">
                  <img
                    src="https://codingapple.com/wp-content/uploads/2020/03/favicon2-16x16.png"
                    alt="코딩애플 온라인 강좌"
                  />
                </a>
              </h2>
              <p>
                © Codingapple, All rights reserved.
                <strong>슈퍼로켓 에듀케이션 /</strong> 서울특별시 강동구 고덕로
                19길 30 /대표 : 박해윤 / 사업자등록번호 : 212-26-14752 온라인
                교육학원업 / 통신판매업신고번호 : 제 2017-서울강동-0002 호 /
                개인정보관리자 : 박종흠 / 대표메일 : ADMIN@CODINGAPPLE.COM
              </p>
            </Flex>
          </div>
        </div>
      </FooterBottomContainer>
    </Wrap>
  );
};

export default Footer;
const Wrap = styled.div`
  min-height: 100%;
  position: relative;
`;
const Footers = styled.div`
  width: 100%;
  background-color: #2f3349;
  clear: both;
  padding: 40px 0;
  font-size: 14px;
  position: relative;
  transform: translatY(-100%);
  & h4 {
    color: #fff;
  }
  & p {
    color: #fff;
  }
  & span {
    color: #fff;
  }
`;
const Container = styled.div`
  padding-left: 70px;
  padding-right: 70px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1410px;
  margin: auto;
`;
const Row = styled.div``;
const FooterTop = styled.div``;
const H4 = styled.h4``;
const Span = styled.span`
  &:hover {
    color: #ff4949;
    transition: all 0.2s ease-in-out;
  }
`;
const Img = styled.img`
  width: 360px;
  height: 60px;
`;
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FooterBottomContainer = styled.div`
  background-color: #21222d;
  padding: 30px 50px;
  font-size: 11px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  position: relative;
  transform: translatY(-100%);
  & p {
    color: #fff;
  }
  & strong {
    color: #fff;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  & img {
    margin-top: -5px;
  }
`;
