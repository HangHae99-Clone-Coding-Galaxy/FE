
import React from 'react'
import { useEffect } from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { __getCreate } from '../Redux/modules/addCreateSlice';
import { useNavigate } from 'react-router-dom';


export default function AllCourses() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <CoursesWrap>

     {courses.map((course)=>{
      return(
        <Card key={course.id}
        onClick={()=>{
          navigate(`/course/${course.id}`)
        }}
        >
          <IMG src='https://codingapple.com/wp-content/uploads/2020/02/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-6-1-1.png'/>
        {/* <img src={course.image} alt="test"/> */}
        <TextWrap>
        <h5>{course.title}</h5>
        <p>{course.content}</p>
        </TextWrap>
        </Card>
      )
     })}

    </CoursesWrap>
  );
}

const CoursesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1320px;
  margin: 0 auto;
  border: none;
/* display: grid;
border: none;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: minmax(417px);
padding: 10px; */
`;

const IMG = styled.img`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
   flex-direction: column;
    border: 1px solid #ccc;
    color: #a0a0a0;
    border-radius: 4px;
    width: 400px;
    height: 250px;
    /* margin: 0.6rem 0.6rem;
    padding: 0.1rem; */
    outline: none;
    cursor: pointer;
`;

const Card = styled.div`
display: flex;
align-self: flex-start;
flex-direction: column;
width: 440px;
height: 417px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-weight: bold;
transition: all 0.7s;
  :hover {
    transform: scale(0.9);
  }
`;

const TextWrap = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 0.7rem;
  font-size: 0.9rem;
  font-weight: bold;

  h5 {
    transition: all 0.7s;
    color: #105796;
    font-size: 18px;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
  p {
    font-size: 16px;
    text-overflow: ellipsis;
    text-align: center;
    width: 360px;
    height: 20px;
  }
`;

