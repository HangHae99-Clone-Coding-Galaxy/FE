import React from 'react'
import { useEffect } from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { __getCreate } from '../Redux/modules/addCreateSlice';

export default function AllCourses() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(__getCreate());
  },[dispatch]);

  const courses = useSelector((state)=> state?.addCreateSlice?.courses);

  if(courses.length===0){
    return (
      <h1>아직 생성된 강의가 없습니다.</h1>
      )
  };

  return (
    <div>
     {courses.map((course)=>{
      return(
        <div key={course.id}>
        {/* <img src={course.image} alt="test"/> */}
        <p>{course.title}</p>
        <p>{course.content}</p>
        </div>
      )
     })}
    </div>
  )
}

const CourseCard = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  gap: 10px;
`;