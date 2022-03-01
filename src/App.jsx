import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import Navbar from './components/Navbar';
import AddPost from './pages/AddPost';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Loading from './pages/Loading';
import Main from './pages/Main';
import Register from './pages/Register';
import { getUser } from './redux/modules/user';
import { getPostAxios,getPostFB,setNewPaging } from './redux/modules/post';

import TodoTemplate from "./components/TodoTemplate";
import { createGlobalStyle } from "styled-components";
import firebaseApp from "./service/firebase/firebase"

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.post.is_loading);
  const isLogin = useSelector(state => state.user.is_login);
  const isToken = sessionStorage.getItem('token') ? true : false;

  useEffect(() => {
    //isToken && dispatch(getUser());
    dispatch(getUser());
    dispatch(setNewPaging());
    dispatch(getPostAxios());
  },[isLogin, isToken]); //[isLogin, isToken]
  console.log(isLoading,"isLoding")

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        {/* {isLoading && <Loading />} */}
        <Navbar isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<Main isLogin={isLogin} />} />
          <Route path="/post" element={<AddPost />} />
          <Route path="/edit/:postId" element={<AddPost />} />
          <Route path="/post/:postId" element={<Detail />} />
          <Route path="/register" element={<Register isLogin={isLogin} />} />
          <Route path="/login" element={<Login isLogin={isLogin} />} />
        </Routes>
      </TodoTemplate>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default App;
