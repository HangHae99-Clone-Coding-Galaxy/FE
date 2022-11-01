import React, { useEffect } from "react";
import styled from "styled-components";

const SearchDetail = () => {
  useEffect(() => {
    window.Kakao.init("9036238f2cf03a3bb3b9c7c5f5cf7c06");
  }, []);

  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj.access_token);
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <Kakao onClick={loginWithKakao}>
      <img src="../img/kakao.png"></img>
    </Kakao>
  );
};

export default SearchDetail;

const Kakao = styled.li`
  cursor: pointer;
  background-color: #fee500;
`;
