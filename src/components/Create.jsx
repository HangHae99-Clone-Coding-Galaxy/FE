import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __addCreate } from "../Redux/modules/addCreateSlice";

const Create = () => {
  const dispatch = useDispatch();

  const init = {
    title: "",
    content: "",
    price: "",
  };

  //폼데이터 전송 스테이트
  const [input, SetInput] = useState(init);
  const [thumbNail, setThumbNail] = useState(null);

  const [video, setVideo] = useState(null);

  // 이미지 미리보기 스테이트
  const [imageSrc, setImageSrc] = useState("");

  //텍스트데이터 스테이즈 저장
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    SetInput({ ...input, [name]: value });
  };

  //이미지 스테이트저장, 미리보기 온체인지 핸들러
<<<<<<< HEAD
  // const onChangeImage = (e) => {
  //   setThumbNail(e.target.files[0]);
  //   let reader = new FileReader();
  //   if (e.target.files[0]) {
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  //   reader.onloadend = () => {
  //     const previewImgUrl = reader.result;
  //     if (previewImgUrl) {
  //       setImageSrc([...imageSrc, previewImgUrl]);
  //     }
  //   };
  // };

=======
  const onChangeImage = (e) => {
    setThumbNail(e.target.files[0]);
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setImageSrc([...imageSrc, previewImgUrl]);
      }
    };
  };
>>>>>>> origin/sohee
  // 비디오 스테이트 저장
  const onChangeVideo = (e) => {
    setVideo(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(__addCreate({ ...input, video }));
  };

  //스테이트 폼데이터 변환하고 통신연결
  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();

  //   formData.append("title", input.title);
  //   formData.append("content", input.content);
  //   formData.append("thumbNail", thumbNail);
  //   formData.append("video", video);

  //   for (let pair of formData.entries()) {
  //     console.log(pair[0] + "," + pair[1]);
  //   }

  //   axios
  //     .post("http://3.35.218.131:8080/api/courses/create", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then(function a(response) {
  //       console.log(response);
  //       alert("게시되었습니다.");
  //       window.location.replace("/");
  //     })
  //     .catch(function () {
  //       console.log("땡! 다음기회에 도전하세요!");
  //     });
  //   navigate("/");
  // };

  return (
    <FormWrap onSubmit={submitHandler}>
      <input
        type="text"
        name="title"
        placeholder="강좌명"
        onChange={onChangeInput}
      />
      <input
        type="text"
        name="price"
        placeholder="강의금액"
        onChange={onChangeInput}
      />
      <textarea
        type="text"
        autoComplete="off"
        id="content"
        name="content"
        placeholder="내용"
        onChange={onChangeInput}
      />
      <ImgSize src={imageSrc} alt="" />
      <input
        name="thumbNail"
        type={"file"}
        accept={"image/*"}
        placeholder="이미지업로드"
        onChange={onChangeImage}
      />
      <input
        name="video"
        type={"file"}
        accept={"video/*"}
        placeholder="비디오업로드"
        onChange={onChangeVideo}
      />

      <button>등록</button>
    </FormWrap>
  );
};

export default Create;

const FormWrap = styled.form`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 800px;
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  gap: 10px;
  input {
    width: 450px;
    height: 30px;
  }
  textarea {
    padding: 10px;
    min-width: 450px;
    max-width: 450px;
    min-height: 300px;
    max-height: 300px;
  }
`;

const ImgSize = styled.img`
  width: 70px;
  height: 70px;
`;
