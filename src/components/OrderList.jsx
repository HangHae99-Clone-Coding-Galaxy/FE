import React from "react";
import styled from "styled-components";
import MemberHeader from "./MemberHeader";

const OrderList = () => {
  return (
    <>
      <MemberHeader />
      <SectionTwo>
        <List>
          <ItemListTwo>
            <div>
              <ul>
                <li>이름</li>
                <li>오성은</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>강의 이름</li>
                <li>리액트</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>결제 요청 일자</li>
                <li>2022-10-31</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>결제 승인 일자</li>
                <li>2022-10-31</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>총 금액</li>
                <li>89,000원</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>결제 방법</li>
                <li>카카오페이</li>
              </ul>
            </div>
          </ItemListTwo>
        </List>
      </SectionTwo>
    </>
  );
};

export default OrderList;
const SectionTwo = styled.div`
  padding-bottom: 281px;
`;

const List = styled.div`
  width: 1410px;
  display: flex;
  padding: 20px 0;
  margin: auto;
`;

const ItemListTwo = styled.div`
  width: 1410px;
  border-radius: 8px;
  padding: 0px;
  padding-left: 7px;
  margin: auto;

  & ul {
    display: flex;
    justify-content: space-between;
  }
  & div {
    width: 500px;
  }
  & li {
    margin-right: 20px;
    padding: 15px;
    font-size: 16px;
  }
`;
