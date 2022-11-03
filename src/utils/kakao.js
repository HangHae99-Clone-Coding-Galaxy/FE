import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../Redux/modules/user";
import "../App.css";

const Kakao = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  // localStorage.setItem("token", code);

  useEffect(async () => {
    await dispatch(userActions.kakaoLogin(code));
  }, []);

  return <div class="loader"></div>;
};
export default Kakao;
