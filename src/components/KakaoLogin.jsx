import React from "react";
import { useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { setCookie } from "./Cookie";
const KakaoLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakao = async () => {
      return await axios
        .get(`http://localhost:3000/api/member/kakao/callback?code=${code}`)

        .then((res) => {
          setCookie("token", res.headers.authorization);
          navigate("/");
        })
        .catch((error) => {
          alert(error.response.data.error.message);
          navigate("/login");
        });
    };
    if (code) {
      kakao();
    }
  }, [code, navigate]);

  return <div></div>;
};

export default KakaoLogin;
