import React from "react";
// import Review from "./Review";
import ReviewListItem from "./ReviewListItem";
import styled from "styled-components";

function ReviewList() {
  return (
    <PL>
      <LT>오늘 어떤책을 고르셨나요?😉</LT>

      {/* <ReviewListItem /> */}
    </PL>
  );
}

export default ReviewList;

const PL = styled.form`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0 auto;
`;

const LT = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;
