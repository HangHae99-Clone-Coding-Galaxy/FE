import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { __delCreate, __getCreateId,__editCreate } from "../Redux/modules/addCreateSlice";
import Review from "./Review";
import ReviewList from "./ReviewList";
import ReviewListItem from "./ReviewListItem";
import axios from "axios";


const CourseDetail = () => {

  const {id} = useParams();
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //업데이트 초기값
  const init = {
    title: "",
    content: "",
  };


  const [upData, setUpData] = useState(init);

  const course = useSelector((state) => state?.addCreateSlice?.course);

  const [pay, setPay] = useState(false);
  

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(__getCreateId(id));
  }, [dispatch,id]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUpData({ ...upData, [name]: value });
  };

    useEffect(() => {
      if(!!course?.title){
        setUpData({title: course?.title,
        content: course?.content})
      }
    }, [course]);

  return (
    <DetailWrap>
      {!pay ? (
        <DetailWrap>
          <TitleH1>{course?.title}</TitleH1>
          <PayWrap>
            <IMG src={course?.thumbNail} alt="test"></IMG>
            <AddWrap>
              <ComButton>신청완료</ComButton>
              <Price>금액:{course?.price}원</Price>              
              <IssueSpan>영상 버퍼링이슈가 있다면▶️</IssueSpan>
            </AddWrap>
          </PayWrap>          
          <ContentP>{course?.content}</ContentP>
          <TitleP>{course?.title}</TitleP>
          <PlayerWrapper>
            <ReactPlayer
              url={course?.video}
              width="100%"
              height="100%"
              muted={false}
              playing={false}
              loop={true}
            />
          </PlayerWrapper>
        </DetailWrap>
      ) : (
        <DetailWrap>
          <TitleP>{course?.title}</TitleP>
          <PayWrap>
          <IMG src={course?.thumbNail} alt="test"></IMG>
            <AddWrap>
              <AddButton>신청하기</AddButton>
              <Price>금액:{course?.price}원</Price>
              <IssueSpan>영상 버퍼링이슈가 있다면▶️</IssueSpan>
            </AddWrap>
          </PayWrap>          
          <ContentP>{course?.content}</ContentP>
          <VidepPaySpan>
            강의구매를 해야 해당강의를 수강할 수 있습니다.
            <br />
            강의신청 바로가기{" "}
          </VidepPaySpan>
        </DetailWrap>
      )}

      {edit ? (
        <EditWrap>
          <input
            type="text"
            name="title"
            placeholder="변경할 내용"
            defaultValue={course?.title}
            onChange={onChangeHandler}
          />
          <textarea
            type="text"
            name="content"
            placeholder="변경할 내용"
            defaultValue={course?.content}
            onChange={onChangeHandler}
          />
          <ButtonWrap>
    <button
      onClick={() => {
        dispatch(__editCreate({upData, course:course?.course_id}));
        dispatch(__getCreateId(course?.course_id))
        setEdit(false);
      }}
    >완료
    </button>
    <button
      onClick={() => {
        dispatch(__delCreate(course?.course_id));
        navigate("/allcourses");
      }}
    >
      삭제
    </button>
    </ButtonWrap>
        </EditWrap>
      ) : <ButtonWrap>
      <ButtonTrans
        onClick={() => {
          setEdit(!edit);
        }}
      >수정
      </ButtonTrans>
      {/* <ButtonTrans
        onClick={() => {
          dispatch(__delCreate(id));
          navigate("/allcourses");
        }}
      >
        삭제
      </ButtonTrans> */}
      </ButtonWrap>}

  {/* {edit?(
    <ButtonWrap>
    <ButtonTrans
      onClick={() => {
        dispatch(__editCreate())
        setEdit(false);
      }}
    >완료
    </ButtonTrans>
    <ButtonTrans
      onClick={() => {
        dispatch(__delCreate(id));
        navigate("/allcourses");
      }}
    >
      삭제
    </ButtonTrans>
    </ButtonWrap>
  ):(

<ButtonWrap>
<ButtonTrans
  onClick={() => {
    setEdit(!edit);
  }}
>수정
</ButtonTrans>
<ButtonTrans
  onClick={() => {
    dispatch(__delCreate(id));
    navigate("/allcourses");
  }}
>
  삭제
</ButtonTrans>
</ButtonWrap>
  )} */}

     

      <Review />
      <ReviewList />
    </DetailWrap>
  );
};

export default CourseDetail;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1320px;
  margin: 0 auto;
  border: none;
`;

const PlayerWrapper = styled.div`
  position: relative;
  width: 960px;
  height: 540px;
  margin-top: 50px;
  /* padding-top: 56.25 /* Player ratio: 100 / (1280 / 720) */
  */ .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: right;
  margin: 0 auto;
  background-color: transparent;
  border: none;
`;

const ButtonTrans = styled.button`
  background-color: transparent;
  color: transparent;
  border: none;
  :hover {
    color: grey;
  }
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
  width: 600px;
  height: 400px;
  /* margin: 0.6rem 0.6rem;
    padding: 0.1rem; */
  outline: none;
  cursor: pointer;
`;
const PayWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: row;
  align-items: right;
  justify-content: right;
  margin-top: 20px;
  background-color: transparent;
  border: none;
`;
const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 80px;
  background-color: #ea4747;
  border-radius: 10px;
  color: white;
  flex-direction: row;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(0.9);
  }
`;

const IssueSpan = styled.span`
  cursor: pointer;
  :hover {
    color: #50b1f1;
    transform: scale(0.9);
  }
`;
const Price = styled.span`
  color:grey  
`;

const AddWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 250px;
  background-color: #f3f3f3aa;
  margin: auto;
  gap: 40px;
  border: none;
`;

const TitleP = styled.p`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 50px;
  border-radius: 20px;
  background-color: #f3f3f3aa;
  gap: 40px;
  border: none;
  color: #105796;
  font-size: 18px;
  font-weight: bold;
`;

const TitleH1 = styled.p`
  display: flex;
  margin-top: 10px;
  margin-left: 20px;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 1200px;
  height: 50px;
  gap: 40px;
  border: none;
  color: #000000;
  font-size: 30px;
  font-weight: bold;
`;

const ContentP = styled.p`
  display: flex;
  margin-top: 30px;
  margin-left: 60px;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 1200px;
  gap: 40px;
  border: none;
  color: #2f3030;
  font-size: 15px;
  white-space: pre-line;
`;

const VidepPaySpan = styled.span`
  width: 400px;
  height: 300px;
  display: flex;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #c6c3c3;
  color: #0f4a70;
  cursor: pointer;
  :hover {
    color: #803d3d;
    text-decoration: underline;
  }
`;

const ComButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 80px;
  background-color: #a8b6f8;
  border-radius: 10px;
  color: #4f4b4b;
  flex-direction: row;
  border: none;
`;

const EditWrap = styled.div`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 400px;
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  gap: 10px;
  input{
    width: 450px;
    height: 30px;
  }
  textarea{
    padding: 10px;
    min-width: 450px;
    max-width: 450px;
    min-height: 300px;
    max-height: 300px;
  }
`;