import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addPost } from "../Redux/bookSlice";
import styled from "styled-components";
// import Button from "./element/Button";

function Review() {
  const init = {
    title: "",
    writer: "",
    // review: "",
  };
  const dispatch = useDispatch();
  const [post, setPost] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(post);
    setPost({ ...post, [name]: value });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(__addPost(post));
    setPost(init);
  };

  // 댓글 기능

  return (
    <Form onSubmit={onClickHandler}>
      <h1>수강 댓글</h1>
      <Wraper>
        <input
          type="text"
          name="writer"
          value={post.writer}
          maxLength={10}
          placeholder="작성자"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="text"
          name="title"
          value={post.title}
          maxLength={50}
          placeholder="강의 이름"
          onChange={(e) => onChangeHandler(e)}
        />
      </Wraper>
      {/* <textarea
        cols="1"
        rows="50"
        name="review"
        placeholder="강의평"
        value={post.review}
        maxLength={1000}
        onChange={(e) => onChangeHandler(e)}
      /> */}
      <button
        type={"submit"}
        // disabled={!post.writer || !post.title || !post.review}
        styles={{ color: "white" }}
        theme={"black"}
        size={"large"}
      >
        추가
      </button>
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
