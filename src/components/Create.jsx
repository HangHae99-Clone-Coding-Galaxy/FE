import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { __addCreate } from "../Redux/modules/addCreateSlice";
import { configure } from "@testing-library/react";

const Create = () => {

  // const BASE_URL = process.env.REACT_APP_SERVER

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const init = {
    title: "",
    content: "",
  };
  //폼데이터 전송 스테이트
  const [input, SetInput] = useState(init);
  // const [thumbNail, setThumbNail] = useState(null);
  // const [video, setVideo] = useState(null);


  // 이미지 미리보기 스테이트
  const [imageSrc, setImageSrc] = useState("");

  //텍스트데이터 스테이즈 저장
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    SetInput({ ...input, [name]: value });
  };

  //이미지 스테이트저장, 미리보기 온체인지 핸들러
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
  //비디오 스테이트 저장
  // const onChangeVideo = (e) => {
  //   setVideo(e.target.files[0]);
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   axios
  //       .post(`${BASE_URL}/api/courses/create`, input, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       })
  //       .then(function a(response) {
  //         console.log(response);
  //         alert("게시되었습니다.");
  //         window.location.replace("/");
  //       })
  //       .catch(function () {
  //         console.log("땡! 다음기회에 도전하세요!");
  //       });
  //     navigate("/");
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("title", input.title);
    formData.append("content", input.content);
    formData.append("thumbNail", thumbNail);
    formData.append("video", video);

    for (let pair of formData.entries()) {
      console.log(pair[0] + "," + pair[1]);
    }
    // dispatch(__addCreate(formData));

    axios
      .post("http://43.201.75.53:8080/api/courses/create", formData)
      .then(function a(response) {
        console.log(response);
        alert("게시되었습니다.");
        window.location.replace("/");
      })
      .catch(function () {
        console.log("땡! 다음기회에 도전하세요!");
      });
    navigate("/");
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
    <FormWrap
      onSubmit={submitHandler}
      Content-Type="multipart/form-data"
      method="post"
    >
      <input
        type="text"
        name="title"
        placeholder="강좌명"
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
      {/* <ImgSize src={imageSrc} alt="" />
      <input
        htmlFor="file"
        autoComplete="off"
        id="thumbNail"
        name="thumbNail"
        type={"file"}
        accept="image/*"
        placeholder="이미지업로드"
        onChange={onChangeImage}
      />
      <input
        htmlFor="file"
        autoComplete="off"
        id="video"
        name="video"
        type={"file"}
        accept="video/mp4,video/mkv, video/x-m4v,video/*"
        placeholder="비디오업로드"
        onChange={onChangeVideo}
      /> */}

      <button>등록</button>
    </FormWrap>
  );

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   //등록해야되는 항목 state
  //   const [title, SetTile] = useState();
  //   const [content, SetContent] = useState();
  //   // const [category, setCategory] = useState();
  //   const [image, setImage] = useState(null);
  //   const [video, setVideo] = useState(null);

  //   //이미지미리보기  state
  //   const [imageSrc, setImageSrc] = useState("");

  //   //value 항목별 담기
  //   // const changeCategory = (e) => {
  //   //   setCategory(e.target.value);
  //   // };

  //   const onChangeTitle = (e) => {
  //     SetTile(e.target.value);
  //   };
  //   const onChangeContent = (e) => {
  //     SetContent(e.target.value);
  //     console.log(content)
  //   };

  //   //이미지 미리보기, 업데이트이미지 스테이트 저장
  //   const onChangeImage = (e) => {

  //     setImage(e.target.files[0]);

  //     let reader = new FileReader();
  //     if (e.target.files[0]) {
  //       reader.readAsDataURL(e.target.files[0]);
  //     }
  //     reader.onloadend = () => {
  //       const previewImgUrl = reader.result;
  //       if (previewImgUrl) {
  //         setImageSrc([...imageSrc, previewImgUrl]);
  //       }
  //     };
  //   };

  //   const onChangeVideo = (e) => {
  //     setVideo(e.target.files[0]);
  //   };

  //   //  폼데이터 변환 후 청크 전달
  //   const addClass = (e) => {

  //     e.preventDefault();

  //     const formData = new FormData();
  //     formData.append("title", title);
  //     formData.append("content", content);
  //     // formData.append("category", category);
  //     formData.append("image", image);
  //     formData.append("video", video);

  //     //폼데이터 콘솔보기
  //       for(let pair of formData.entries()){
  //     console.log(pair[0]+','+pair[1]);
  //   };

  //   dispatch(__addCreate(formData));
  //   navigate("/");

  //   // axios
  //   //     .post("http://localhost:3001/create", formData)
  //   //     .then(function a(response) {
  //   //         alert("게시되었습니다.");
  //   //         window.location.replace("/");
  //   //     })
  //   //     .catch(function (error) {
  //   //         console.log(error.response);
  //   //     });

  //   };

  //   return (
  //     <FormWrap onSubmit={addClass} encType="multipart/form-data">
  //       {/* <select onChange={changeCategory} value={category}>
  //         <option value="">선택</option>
  //         <option value="ReactBasic">리액트</option>
  //         <option value="JavaScriptEs6">자바스크립트ES6</option>
  //         <option value="JavaScriptJQuery">자바스크립트+JQuery</option>
  //         <option value="NodeJsMongoDB">NodeJS+MongoDB</option>
  //         <option value="HtmlCss">HTML/CSS</option>
  //         <option value="Git">git/github</option>
  //       </select> */}
  //       <input type="text" defaultValue={title} name="title" placeholder="강좌명" onChange={onChangeTitle} />
  //       <textarea type="text" defaultValue={content} name="content" placeholder="강좌내용" onChange={onChangeContent} />
  //       <p>이미지미리보기</p>
  //       <ImgSize src={imageSrc} alt="" />
  //       <input
  //         onChange={onChangeImage}
  //         id="image"
  //         type="file"
  //         accept="image/*"
  //         name="image"
  //       ></input>
  //       <input
  //         onChange={onChangeVideo}
  //         id="video"
  //         type="file"
  //         accept="video/mp4,video/mkv, video/x-m4v,video/*"
  //         name="video"
  //       ></input>
  //       <button>등록</button>
  //     </FormWrap>
  //   );
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
