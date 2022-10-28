import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __delComment, __editComment } from "../slice/commentSlice";
import styled from "styled-components";

function ReviewListItem(props) {
  const dispatch = useDispatch();
  const { comment } = props;
  const [edit, setEdit] = useState(false);
  const [bookEdit, setBookEdit] = useState(comment);

  // useEffect(() => {
  //   dispatch(__getComment(id));
  // }, [dispatch, bookEdit]);

  //init = {ment : 1, name"""}
  //ment : 1
  //ment : 12
  // {0: 1, 1:2, ment : 1}

  //init = {title:"", body:""}
  // e.target: {title:"ㅇㄴㄹㄴㅇㄹ", body:"ㄴㅇㄹㄴㅇㄹ"}
  // 전개 {title:"ㄴㅇㄹㄴㅇㄹ", body:"ㄴㅇㄹㄴㅇㄹ"}

  //{ment : 1, name:""} + ment: "abcd" ment만 덮자
  //풀어쓰고 있었던 ...bookEdit {ment : 1, name:""} X "1" O
  // const onChangeClick =(e)=>{
  //   console.log("@submit!")
  //   e.preventDefault();
  //  dispatch(__editComment({...props,coment:bookEdit}));
  //  setEdit(false);
  // }

  return (
    <Wraper>
      <p>
        {comment.name}님 :
        {edit ? (
          <input
            type="text"
            name="ment"
            required
            default_value={comment.ment}
            onChange={(e) => setBookEdit(e.target.value)}
          />
        ) : (
          comment.ment
        )}
        {edit ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(__editComment({ ...comment, ment: bookEdit }));
              setEdit(false);
            }}
            type="submit"
          >
            완료
          </button>
        ) : (
          <button
            onClick={() => {
              setEdit(!edit);
            }}
          >
            수정
          </button>
        )}
        <button onClick={() => dispatch(__delComment(comment))}>삭제</button>
      </p>
    </Wraper>
  );
}

export default ReviewListItem;

const Wraper = styled.div`
  margin: 20px;
  gap: 30px;
  display: flex;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  flex-direction: column-reverse;
  /* margin: 100px auto 0 auto; */
`;
