import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getCreate } from '../../Redux/modules/addCreateSlice';
import Review from '../../components/Review'
import { useParams } from 'react-router-dom';

const HtmlCss = () => {
  const {id} = useParams();
  const dispatch = useDispatch;
  const courses = useSelector((state)=> state.courses.courses)

  useEffect(()=>{
    if(courses.category==="HtmlCss"){
      return dispatch(__getCreate())
    }else{
      return alert("아직 생성된 강의가 없습니다.")
    };
  },[dispatch]);
  
  return (
    <>
      {courses.category.HtmlCss?.map((item) => {
        return(
          <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <p>{item.file}</p>
          </div>
        )
      })}
      {
        <input type="text" />
      }

    </>
  );
}

export default HtmlCss
