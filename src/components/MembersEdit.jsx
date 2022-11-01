import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MemberHeader from "./MemberHeader";

const MembersEdit = () => {
  // image preview useState
  const [previewImage, setPreviewImage] = useState("");
  const [uploadImageForm, setUploadImageForm] = useState(null);

  const imgFileHandler = (e) => {
    setUploadImageForm(e.target.files[0]);

    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setPreviewImage([...previewImage, previewImgUrl]);
      }
    };
  };
  return (
    <>
      <MemberHeader />
      <SectionTwo>
        <ItemListTwo>
          <ImageLayout>
            <ImageLabel htmlFor="file" />
            <ImageInput
              id="addFile"
              type="file"
              name="imageUrl"
              placeholder="업로드"
              accept={"image/*"}
              onChange={imgFileHandler}
            />
            <ImagePreview
              //   src={previewImage === "" ? data?.imgUrl : previewImage}
              src="https://i.pinimg.com/originals/d2/4f/89/d24f89d6afaec9d3a55d47fed799800e.jpg"
            />
          </ImageLayout>
          <Label htmlFor="signup_username">이름 * </Label>
          <input type="text" name="userid" id="userid" required />

          <br />
          <input
            type="submit"
            name="profile-group-edit-submit"
            id="profile-group-edit-submit"
            value="변경사항 저장"
          ></input>
        </ItemListTwo>
      </SectionTwo>
    </>
  );
};

export default MembersEdit;

const SectionTwo = styled.div`
  padding-bottom: 281px;
`;
const Label = styled.div`
  font-size: 20px;
`;

const ItemListTwo = styled.form`
  width: 1410px;
  padding: 30px 0;
  margin: auto;
  & input:nth-child(3) {
    width: 70%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    color: #313b3d;
    font-size: 100%;
    padding: 12px;
    margin: 10px 0px;
  }
  & input:nth-child(5) {
    font-size: 15px;
    background-color: #fff;
    border-color: #ff4949;
    color: #ff4949;
    border-width: 1px;
    padding: 6px;
    border-radius: 2px;
    line-height: 1.6;
    width: 100px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: #ff4949;
      color: #fff;
    }
  }
`;
export const ImageLayout = styled.div`
  position: relative;
  border-radius: 100%;
  height: 100px;
  width: 100px;
  overflow: hidden;
  resize: none;
  margin: 20px 0 40px 0;
  border: 1px solid #ccc;
`;
export const ImagePreview = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImageLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: transparent;
`;

export const ImageInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;
