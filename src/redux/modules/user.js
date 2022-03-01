import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FirebaseAuth from "../../shared/firebase/firebaseAuth";

const FBapi = new FirebaseAuth();
//초기 상태
const initialState = {
  user_info: {
    username: null,
    userid: null,
  },
  is_login: false,
};

//createAsyncThunk
//Action type과 Promise를 반환하는 함수를 수락하고
//pending/fulfilled/rejected 해당 Promise를 기반으로 Action type을 전달하는 thunk를 생성합니다.
export const getUserFB = createAsyncThunk("user/getUserFB", async () => {
  const userData = await FBapi.getUser(); //is_login, userdata 반환
  return userData;
});

export const sighupFB = createAsyncThunk(
  "user/sighupFB",
  async (registerData) => {
    const userData = await FBapi.signUp(registerData);
    return userData;
  }
);

export const loginFB = createAsyncThunk("user/loginFB", async (loginData) => {
  const userData = await FBapi.signIn(loginData);
  return userData;
});

export const logoutFB = createAsyncThunk(
  "user/logoutFB",
  async () => await FBapi.signOut()
);

//createSlice
//get :리듀서 함수의 객체, 슬라이스 이름, 초기 상태 값을 받아들인다
//create :해당 액션 생성자와 액션 유형으로 슬라이스 리듀서를 자동으로 생성
export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUserFB.fulfilled]: (state, action) => {
      state.user_info = { ...action.payload.user_info };
      state.is_login = action.payload.is_login;
    },
    [sighupFB.fulfilled]: (state, action) => {
      state.user_info = action.payload.user_info;
      state.is_login = action.payload.is_login;
    },
    [loginFB.fulfilled]: (state, action) => {
      state.user_info = action.payload.user_info;
      state.is_login = action.payload.is_login;
    },
    [logoutFB.fulfilled]: (state, action) => {
      state.user_info = initialState.user_info;
      state.is_login = initialState.is_login;
    },
  },
});

export default userSlice.reducer;
