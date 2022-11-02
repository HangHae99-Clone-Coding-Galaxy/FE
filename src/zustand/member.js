import create from "zustand";
import { kakaoAuthApi } from "../utils/apis/member";
import createToken from "../utils/token";

const useMemberStore = create((set) => ({
  kakaoAuth: async (code) => {
    const resData = await kakaoAuthApi(code)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      createToken(
        resData.headers["authorization"].split(" ")[1],
        resData.headers["refresh-token"]
      );
      set({ is_login: resData?.data.success });
      return resData.data.success;
    }
  },
}));

export default useMemberStore;
