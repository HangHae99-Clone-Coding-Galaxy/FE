import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPost, __getPostId } from "../Redux/bookSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ReviewListItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  const posts = useSelector((state) => state.bookSlice.posts);

  return (
    <Wraper>
      {/* 
      {
       posts.map((item)=>{
        {id}
       }) 
      } */}

      {posts.map((item) => {
        return (
          <Content
            onClick={() => {
              dispatch(__getPostId(item.id));
              navigate(`/detail/${item.id}`);
            }}
            key={item.id}
          >
            {" "}
            {item.writer} 님의 오늘의 책은? {item.title}{" "}
          </Content>
        );
      })}
    </Wraper>
  );
}

export default ReviewListItem;

const Wraper = styled.div`
  margin: 20px;
  gap: 30px;
  display: flex;
  flex-direction: column-reverse;
  cursor: pointer;
`;

const Content = styled.li`
  text-align: center;
  cursor: pointer;
  list-style: none;
  padding-left: 0px;
  &:hover {
    color: #003bd2;
    text-decoration: underline;
  }
`;
