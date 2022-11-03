import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    __getReviewList
  } from "../Redux/modules/addCreateSlice";

const ReviewListPage = () => {

 
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(__getReviewList(id));
      }, [dispatch, id]);

    const reviews = useSelector((state) => state?.addCreateSlice?.review);


  return (
    <div>
        {reviews&&reviews?.map((item)=>{
            return (
                <div key={item.id}>
                <p>{item.nickname}님 :{item.comment}</p>
                </div>
            )
        })}      
    </div>
  )
}

export default ReviewListPage

