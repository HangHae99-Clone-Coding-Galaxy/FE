import React, { useEffect } from "react";
// import Review from "./Review";
import ReviewListItem from "./ReviewListItem";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getComment } from "../Redux/commentSlice";
import { useParams } from "react-router-dom";

function ReviewList() {
  const commentList = useSelector((state) => state.commentSlice.comments);
  console.log(commentList);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getComment(id));
  }, [dispatch, id]);
  return (
    <div>
      {commentList.map((comment) => (
        <div key={comment.id}>
          <p>
            {/* {comment.id} */}
            {comment.title}
            {comment.comment}
          </p>
        </div>
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
