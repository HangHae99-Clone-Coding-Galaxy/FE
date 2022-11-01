import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addComment } from "../Redux/commentSlice";
import styled from "styled-components";
// import Button from "./element/Button";

function Review() {
  const init = {
    id: "",
    comment: "",
    // review: "",
  };
  const dispatch = useDispatch();
  const [comment, setComment] = useState({ comment: "" });
  const courseId = useSelector((state) => state?.addCreateSlice?.course?.id);

  const onChangeHandler = (e) => {
   setComment({courseId:courseId,...comment,comment:e.target.value});
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(__addComment(comment));
    setComment({ comment: "" });
  };

  // 댓글 기능

  return (
    <Form onSubmit={onClickHandler}>
      <input
        type="text"
        name="comment"
        value={comment?.comment}
        placeholder="댓글 추가"
        onChange={onChangeHandler}
      />
      <button>추가</button>
    </Form>
  );
}

export default Review;

const Form = styled.form`
  display: flex;
  width: 500px;
  height: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  flex-direction: column;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin: 100px auto 0 auto;
`;

const Wraper = styled.div`
  display: flex;
  width: 420px;
  justify-content: space-between;
  gap: 50px;
  margin: 20px;
`;
