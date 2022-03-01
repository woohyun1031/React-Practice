import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Firestore from "../../shared/firebase/firestore";
import FBstorage from "../../shared/firebase/storage";

const FSapi = new Firestore();
const Storage = new FBstorage();

//createAsyncThunk
//Action type과 Promise를 반환하는 함수를 수락하고
//pending/fulfilled/rejected 해당 Promise를 기반으로 Action type을 전달하는 thunk를 생성합니다.
export const getPostFB = createAsyncThunk(
  "post/getPostFB",
  async () => await FSapi.getPost()
);

export const addPostFB = createAsyncThunk(
  "post/addPostFB",
  async (postData, { getState }) => {
    const _image = getState().image.preview;
    const _userid = getState().user.user_info.userid;
    const url = await Storage.uploadFile(_image, _userid);
    const docRef = await FSapi.addPost({ ...postData, imageurl: url });
    return { ...postData, boardId: docRef.id, imageurl: url };
  }
);

export const updatePostFB = createAsyncThunk(
  "post/updatePostFB",
  async (wordObj) => {
    await FSapi.updatePost(wordObj);
    return wordObj;
  }
);

export const deletePostFB = createAsyncThunk(
  "post/deletePostFB",
  async (boardId) => {
    await FSapi.deletePost(boardId);
    return boardId;
  }
);

//createSlice
//get :리듀서 함수의 객체, 슬라이스 이름, 초기 상태 값을 받아들인다
//create :해당 액션 생성자와 액션 유형으로 슬라이스 리듀서를 자동으로 생성
export const postSlice = createSlice({
  name: "post",
  initialState: { data: [] },
  Reducers: {
    [getPostFB.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [addPostFB.fulfilled]: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    [updatePostFB.fulfilled]: (state, action) => {
      state.list = state.list.map((word) => {
        if (word.id === action.payload.id) {
          return action.payload;
        }
        return word;
      });
    },
    [deletePostFB.fulfilled]: (state, action) => {
      state.data = state.data.filter((post) => post.boardId !== action.payload);
    },
  },
});

export const { createPost, deletePost, editPost, postLike, postLikeCancel } =
  postSlice.actions;

export default postSlice.reducer;
