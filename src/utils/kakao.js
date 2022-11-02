import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../Redux/modules/user";

const Kakao = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  // localStorage.setItem("token", code);

  useEffect(async () => {
    await dispatch(userActions.kakaoLogin(code));
  }, []);

  return <div>로딩중입니다...</div>;
};
export default Kakao;
