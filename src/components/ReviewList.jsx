import React, { useState, useEffect } from "react";
// import Review from "./Review";
import ReviewListItem from "./ReviewListItem";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  __getComment,
  __delComment,
  __fixComment,
  commentsSlice,
} from "../Redux/commentSlice";
import { useParams } from "react-router-dom";

function ReviewList() {
  const commentList = useSelector((state) => state.commentSlice.comments);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(__getComment(id));
  }, [dispatch, id]);

  return (
    <div>
      {commentList.map((comment) => (
        <ReviewListItem key={comment.id} comment={comment} />
      ))}
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
