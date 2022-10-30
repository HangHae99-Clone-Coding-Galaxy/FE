import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MembersEdit = () => {
  const navigate = useNavigate();
  const profile = () => {
    navigate("/members");
  };
  const profileEdit = () => {
    navigate("/membersEdit");
  };

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
      <Section>
        <Container>
          <Flex>
            <Img
              src="https://i.pinimg.com/originals/d2/4f/89/d24f89d6afaec9d3a55d47fed799800e.jpg"
              alt=""
            />
            <H1>오성은</H1>
          </Flex>
        </Container>
        <Row>
          <ItemListOne>
            <div>
              <ul>
                <li onClick={profile}>프로필</li>
                <li onClick={profileEdit}>편집</li>
                <li>설정</li>
              </ul>
            </div>
          </ItemListOne>
        </Row>
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
            value="변경사항 저장 "
          ></input>
        </ItemListTwo>
      </Section>
    </>
  );
};

export default MembersEdit;

const Section = styled.div`
  padding-bottom: 182px;
`;
const Container = styled.div`
  width: 1410px;
  display: flex;
  padding: 30px 0;
  margin: auto;
`;
const Row = styled.div`
  width: 1410px;
  display: flex;
  margin: auto;
`;
const Label = styled.div`
  font-size: 20px;
`;

const Flex = styled.div`
  display: flex;
`;
const Img = styled.img`
  border-radius: 100%;
  width: 50px;
  height: 50px;
`;
const H1 = styled.h1`
  font-size: 20px;
  color: #c9c9c9;
  margin-top: 10px;
  margin-left: 15px;
  font-weight: 600;
`;
const ItemListOne = styled.div`
  width: 1410px;
  border-radius: 8px;
  padding: 5px 0;
  border: none;
  background: #f7f7f7;
  padding-left: 7px;
  display: flex;
  margin: auto;
  & ul {
    display: flex;
  }
  & li {
    margin-right: 20px;
    padding: 15px;
    font-size: 11px;
    cursor: pointer;
    font-weight: 600;
  }
  & li:hover {
    color: #ff4949;
  }
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
