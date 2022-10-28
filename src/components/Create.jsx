import React,{useState} from 'react'
import YouTube from "react-youtube";
import { useNavigate, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

const Create = () => {
  //등록해야되는 항목 state
   const [title,SetTile] = useState();
   const [content,SetContent] = useState(); 
   const [category, setCategory] = useState();
   const [file, setFile] = useState([]);
<>``</>
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
  const onChangeHandler = (e) => {
    setFile(e.target.files);
  };

  return (
    <form encType="multipart/form-data">
      <select
              onChange={changeCategory}
              value="category"
            >
              <option value="">선택</option>
              <option value="ReactBasic">리액트</option>
              <option value="JavaScriptEs6">자바스크립트ES6</option>
              <option value="JavaScriptJQuery">자바스크립트+JQuery</option>
              <option value="NodeJsMongoDB">NodeJS+MongoDB</option>
              <option value="HtmlCss">HTML/CSS</option>
              <option value="Git">git/github</option>
            </select>
      <input type="text" value="title" onChange={onChangeTitle}/>
      <textarea type="text" value="content" onChange={onChangeContent}/>
      <input
                onChange={onChangeHandler}
                id="video_file"
                type="file"
                accept=".mp4"
                name="file"
              ></input>
    </form>
  )
}

export default Create
