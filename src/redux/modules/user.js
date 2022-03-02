import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../../service/apis/userApi";
import FirebaseAuth from "../../service/firebase/firebaseAuth";
import { setCookie, deleteCookie } from "../../shared/Cookie";

const FBapi = new FirebaseAuth();
const Userapi = new UserApi();

const initialState = {
  user_info: {
    username: null,
    userid: null,
  },
  is_login: false,
};

//createAsyncThunk
//Action Type 문자열과 Promise를 반환하는 함수를 수락하고
//pending(진행중)/fulfilled(완료)/rejected(실패) 해당 Promise를 기반으로
//Action Type을 전달하는 Thunk를 생성합니다.

//회원가입 signup
//sighupAxios({ registerData, navigate }) =>
export const sighupAxios = createAsyncThunk(
  "user/sighupAxios", //action type =>name:user reducer에서 sighupAxios를 찾아간다
  async ({ registerData, navigate }) => {
    console.log(registerData, "registerData in redux");
    //Promise를 반환하는 함수
    const sighupResult = await Userapi.signUp({ registerData, navigate }); //return res.data;
    //sighupResult: 요청 후 받은 데이터
    return sighupResult;
  }
);

export const signinAxios = createAsyncThunk(
  "user/sighinAxios",
  async ({ loginData, navigate }, { dispatch }) => {
    console.log(loginData, "loginData in redux");
    const result = await Userapi.signIn({ loginData, navigate }); //result res.data
    console.log(result, "result in redux");
    if (result) {
      //console.log(userData.userData, "userData.userData");
      console.log(result.data, "token value before setcookie");
      setCookie("token", result.data);
      return loginData;
    }
  }
);

export const logoutAxios = createAsyncThunk(
  "user/logoutAxios",
  async ({ navigate }, { dispatch }) => {
    dispatch(deleteUserFromSession());
    navigate("/", { replace: true });
    console.log("로그아웃 완전 navigate 완료!!");
    return true;
  }
);

//createSlice()
//리듀서 함수의 객체, slice 이름, initial state 값을 받아들이고
//해당 Action creator와 Action type으로 slice reducer를 자동으로 생성합니다.
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToSession: (state, action) => {
      sessionStorage.setItem("token", action.payload.token);
      sessionStorage.setItem("username", action.payload.username);
      sessionStorage.setItem("userId", action.payload.userId);
    },
    getUser: (state, action) => {
      state.user_info.username = sessionStorage.getItem("username");
      state.user_info.userid = sessionStorage.getItem("userId");
      //state.is_login = true;
    },
    deleteUserFromSession: (state, action) => {
      deleteCookie("token");
      console.log("token delete!!");
    },
  },
  extraReducers: {
    //sighupAxios.fulfilled 이후
    [sighupAxios.fulfilled]: (state, action) => {
      // state.user_info = action.payload.user_info;
      // state.is_login = action.payload.is_login;
      console.log(action.payload, "sighupAxios.fulfilled action.payload");
    },
    [signinAxios.fulfilled]: (state, action) => {
      console.log(action.payload.username, "action.payload.username"); //woohyun
      state.user_info = {
        username: action.payload.username,
        userid: action.payload.username,
        //userid: action.payload.userid,
      };
      state.is_login = true;
      console.log(state.user_info, state.is_login, "state.user,is_login");
    },
    [logoutAxios.fulfilled]: (state, action) => {
      if (action.payload) {
        state.user_info = initialState.user_info;
        state.is_login = false;
      }
      alert("로그아웃 완료");
    },
  },
});

export const { setUserToSession, getUser, deleteUserFromSession } =
  userSlice.actions;

export default userSlice.reducer;
