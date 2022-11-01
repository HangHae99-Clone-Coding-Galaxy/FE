import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addComment } from "../Redux/commentSlice";
import styled from "styled-components";
// import Button from "./element/Button";

function Review() {
  const init = {
    title: "",
    comment: "",
  };
  const dispatch = useDispatch();
  const [comment, setComment] = useState(init);
  const courseId = useSelector((state) => state?.addCreateSlice?.course?.id);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setComment({ courseId: courseId, ...comment, [name]: value });
    console.log("comment", comment);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(__addComment(comment));
    setComment(init);
  };

  // 댓글 기능

  return (
    <Form onSubmit={onClickHandler}>
      <h3>리뷰 작성</h3>
      <RepleWrap>
        <p>제목</p>
        <input
          type="text"
          name="title"
          value={comment.title}
          placeholder="제목 추가"
          onChange={onChangeHandler}
        />
        <p>내용</p>
        <input
          type="textarea"
          name="comment"
          value={comment.comment}
          placeholder="댓글 추가"
          onChange={onChangeHandler}
        />
      </RepleWrap>
      <button>추가</button>
      {/* <button onClick={()=>{setEdit(!edit)}}>수정</button>
      <button onClick={() => dispatch(__delComment(comment))}>삭제</button> */}
    </Form>
  );
}

export default Review;

const RepleWrap = styled.form`
  box-sizing: border-box;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  width: 500px;
  height: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  flex-direction: column;
  padding: 10px;
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
