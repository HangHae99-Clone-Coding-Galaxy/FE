import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { __setUser } from "../features/userSlice";
import { closeModal, closeSearchModal } from "../features/modalSlice";
import axios from "axios";

const Search = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");

  const onSubmit = async () => {
    window.location.href = "/search/" + word;
  };

  return (
    <ModalContainer>
      <Modal>
        <Box>
          <Div>
            <Flex>
              <H3>로그인</H3>
            </Flex>
            <Input
              type="text"
              placeholder="검색어 입력 후 엔터"
              style={{ color: "#fff" }}
              onChange={(e) => {
                setWord(e.target.value);
                console.log(word);
              }}
            />
            <Close
              onClick={() => {
                dispatch(closeSearchModal());
              }}
            >
              <IoIosClose style={{ fill: "#fff", fontSize: "80px" }} />
            </Close>
          </Div>
        </Box>
      </Modal>
    </ModalContainer>
  );
};

export default Search;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  width: 600px;
  height: 600px;
  background-color: #141414d3;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
`;
const Box = styled.form`
  margin-top: 80px;
  box-sizing: border-box;
`;
const H3 = styled.h3`
  font-size: 16px;
`;
const Close = styled.div`
  margin-top: 80px;
  cursor: pointer;
`;
const Div = styled.div`
  padding: 30px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  & div {
    font-size: 30px;
    margin-top: -8px;
  }
`;
const Input = styled.input`
  width: 70%;
  padding: 20px 30px;
  box-sizing: border-box;
  text-align: center;
  border: none;
  background-color: #2a2b2f11;
  border-bottom: 3px solid #808080b7;
  font-size: 24px;
  resize: none;
  margin-bottom: 10px;
`;
