import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { __getCreateId } from "../Redux/modules/addCreateSlice";
import Review from "./Review";
import ReviewList from "./ReviewList"

const CourseDetail = () => {
  <Review></Review>
  <ReviewList></ReviewList>
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [edit, setEdit] = useState();

  const course = useSelector((state) => state.addCreateSlice.course);

  useEffect(() => {
    dispatch(__getCreateId(id));
  }, [dispatch, id]);

  //   useEffect(() => {
  //     if(!!course?.title){
  //       setEdit({title: course?.title,
  //       content: course?.content})
  //     }
  //   }, [course]);

  return (
    <div>
      <p>{course?.title}</p>
      <p>{course?.content}</p>
    </div>
  );
};

export default CourseDetail;
