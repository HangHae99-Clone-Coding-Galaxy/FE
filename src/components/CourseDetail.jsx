import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { __delCreate, __getCreateId } from "../Redux/modules/addCreateSlice";
import Review from "./Review";
import ReviewList from "./ReviewList";
import ReviewListItem from "./ReviewListItem";

const CourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //업데이트 초기값
  const init = {
    title: "",
    content: "",
  };

  const [upData, setUpData] = useState(init);

  const course = useSelector((state) => state.addCreateSlice.course);

  const [pay, setPay] = useState(true);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(__getCreateId(id));
  }, [dispatch, id]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUpData({ ...upData, [name]: value });
  };

  //   useEffect(() => {
  //     if(!!course?.title){
  //       setEdit({title: course?.title,
  //       content: course?.content})
  //     }
  //   }, [course]);

  return (
    <div>
      {edit ? (
        <div>
          <img src="https://codingapple.com/wp-content/uploads/2020/02/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-6-1-1.png"></img>
          <input
            type="text"
            name="title"
            value={upData?.value}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="content"
            value={upData?.value}
            onChange={onChangeHandler}
          />
        </div>
      ) : (
        <div>
          <img src="https://codingapple.com/wp-content/uploads/2020/02/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-6-1-1.png"></img>
          <p>{course?.title}</p>
          <p>{course?.content}</p>
        </div>
      )}
      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          dispatch(__delCreate(id));
          navigate("/allcourses");
        }}
      >
        삭제
      </button>

      {pay ? (
        <PlayerWrapper>
          <ReactPlayer
            url="https://youtu.be/nxi1EXmPHRs"
            width="100%"
            height="100%"
            muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
            playing={true}
            loop={true}
          />
        </PlayerWrapper>
      ) : (
        <p>강의구매를 해야 해당강의를 수강할 수 있습니다.</p>
      )}
      <ReviewList />
      <Review />
    </div>
  );
};

export default CourseDetail;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
