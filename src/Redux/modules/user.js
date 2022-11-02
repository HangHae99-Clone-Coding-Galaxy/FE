import axios from "axios";

const kakaoLogin = (code) => {
  return function (dispatch, getState) {
    axios({
      method: "GET",
      url: `http://43.201.75.53:8080/api/member/kakao/callback?code=${code}`,
    })
      .then((res) => {
        //get token
        console.log(res);

        const ACCESS_TOKEN = res.headers.authorization;
        const RefreshToken = res.headers.refreshtoken;
        console.log(ACCESS_TOKEN);

        //local store (temp)
        localStorage.setItem("Authorization", ACCESS_TOKEN);
        localStorage.setItem("RefreshToken", RefreshToken);

        window.alert("로그인 성공!!!");
        //get token -> change page to HOME
        window.location.replace("/");
      })
      .catch((err) => {
        console.log("Login error", err);
        window.alert("로그인 실패...");
        window.location.replace("/");
      });
  };
};

const actionCreators = { kakaoLogin };

export { actionCreators };
