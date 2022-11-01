import React from "react";
import styled from "styled-components";
import MemberHeader from "./MemberHeader";

const Members = () => {
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
          </ItemListTwo>
        </List>
      </SectionTwo>
    </>
  );
};

export default Members;
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
