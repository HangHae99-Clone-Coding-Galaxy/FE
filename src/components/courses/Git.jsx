import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getCreate } from '../../Redux/modules/addCreateSlice';
import Review from '../../components/Review'

const Git = () => {
  const dispatch = useDispatch;
  const courses = useSelector((state)=> state.courses.courses)

  useEffect(()=>{
    if(courses.category==="Git"){
      return dispatch(__getCreate())
    }else{
      return alert("아직 생성된 강의가 없습니다.")
    };
  },[dispatch]);
  
  return (
    <>
      {courses.category.Git?.map((item) => {
        return(
          <>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <p>{item.file}</p>
          </>
        )
      })}
      <Review/>
    </>
  );
}

export default Git
