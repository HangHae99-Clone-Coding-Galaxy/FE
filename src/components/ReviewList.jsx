import React, { useState, useEffect } from "react";
// import Review from "./Review";
import ReviewListItem from "./ReviewListItem";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
//test
// import {
//   __getComment,
//   __delComment,
//   __fixComment,
//   commentsSlice,
// } from "../Redux/commentSlice";
import { __getCreate } from "../Redux/modules/addCreateSlice";
import { useParams } from "react-router-dom";

function ReviewList() {
  const commentList = useSelector((state) => state.addCreateSlice?.review);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(__getCreate(id));
  }, [dispatch, id]);
  console.log("코멘트리스트", commentList);

  return (
    <div>
      {commentList?.map((comment) => {
        return <ReviewListItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default ReviewList;

const PL = styled.form`
  width: 550px;
  height: 500px;
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
