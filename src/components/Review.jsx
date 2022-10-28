import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addComment } from "../Redux/commentSlice";

const Review = () => {
  const init = {
    name: "",
    ment: "",
  };

  const [comment, setComment] = useState(init);
  const dispatch = useDispatch();
  // const postid = useSelector((state) => state.bookSlice.post.id);📌

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // setComment({ postid: postid, ...comment, [name]: value });
    setComment({ ...comment, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__addComment(comment));
    setComment(init);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Container>
        <input
          type="text"
          name="name"
          value={comment.name}
          maxLength={10}
          placeholder="닉네임"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="text"
          name="ment"
          value={comment.ment}
          maxLength={200}
          placeholder="댓글 추가"
          onChange={(e) => onChangeHandler(e)}
        />
        <button type={"submit"}>+</button>
      </Container>
    </Form>
  );
};

export default Review;

const Container = styled.div`
  display: flex;
  align-items: left;
  gap: 20px;
  height: 20px;
  margin: 20px 10px 10px 20px;
`;

const Form = styled.form`
  /* display: flex; */
  width: 500px;
  height: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  /* flex-direction: column; */
  /* padding: 50px; */
  justify-content: space-between;

  /* font-size: 20px; */
  font-weight: bold;
  margin: 10px auto 0 auto;
  align-items: center;
`;
