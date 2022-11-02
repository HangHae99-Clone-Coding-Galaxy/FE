import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useMemberStore from "../zustand/member";

const Kakao = () => {
  const navigate = useNavigate();
  const kakaoAuth = useMemberStore((state) => state.kakaoAuth);
  const authorization_code = new URL(window.location.href).searchParams.get(
    "code"
  );

  useEffect(() => {
    const fetchCode = (code) => {
      kakaoAuth(code).then((res) => {
        if (res) {
          navigate("/");
        }
      });
    };
    fetchCode(authorization_code);
  }, []);

  return <div>로딩중입니다...</div>;
};
export default Kakao;
