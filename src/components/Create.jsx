import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __addCreate } from "../Redux/modules/addCreateSlice";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //등록해야되는 항목 state
  const [title, SetTile] = useState();
  const [content, SetContent] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  //이미지미리보기  state
  const [imageSrc, setImageSrc] = useState("");

  //value 항목별 담기
  const changeCategory = (e) => {
    setCategory(e.target.value);
  };
  const onChangeTitle = (e) => {
    SetTile(e.target.value);
  };
  const onChangeContent = (e) => {
    SetContent(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);

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

  const onChangeVideo = (e) => {
    setVideo(e.target.files[0]);
  };

  //  폼데이터 변환 후 청크 전달
  const addClass = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("image", image);
    formData.append("video", video);

    //폼데이터 콘솔보기
    for (let pair of formData.entries()) {
      console.log(pair[0] + "," + pair[1]);
    }
    dispatch(__addCreate(formData));
    navigate("/");
  };

  return (
    <FormWrap onSubmit={addClass} encType="multipart/form-data">
      <select onChange={changeCategory} value={category}>
        <option value="">선택</option>
        <option value="ReactBasic">리액트</option>
        <option value="JavaScriptEs6">자바스크립트ES6</option>
        <option value="JavaScriptJQuery">자바스크립트+JQuery</option>
        <option value="NodeJsMongoDB">NodeJS+MongoDB</option>
        <option value="HtmlCss">HTML/CSS</option>
        <option value="Git">git/github</option>
      </select>
      <input
        type="text"
        value={title}
        id="title"
        placeholder="강좌명"
        onChange={onChangeTitle}
      />
      <textarea
        type="text"
        value={content}
        id="content"
        placeholder="강좌내용"
        onChange={onChangeContent}
      />
      <p>이미지미리보기</p>
      <ImgSize src={imageSrc} alt="" />
      <input
        onChange={onChangeImage}
        id="image"
        type="file"
        accept="image/*"
        name="image"
      ></input>
      <input
        onChange={onChangeVideo}
        id="video_file"
        type="file"
        accept="video/mp4,video/mkv, video/x-m4v,video/*"
        name="file"
      ></input>
      <button>등록</button>
    </FormWrap>
  );
};

export default Create;

const FormWrap = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  gap: 10px;
`;

const ImgSize = styled.img`
  width: 70px;
  height: 70px;
`;
