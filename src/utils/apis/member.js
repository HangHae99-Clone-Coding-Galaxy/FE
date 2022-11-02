import api_basic from "./api/api_basic";

export const kakaoAuthApi = (payload) => {
  return api_basic.get(`/api/member/kakao/callback?code=${payload}`);
};
