import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar';
import AddPost from './pages/AddPost';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import { getUserFB } from './redux/modules/user';

import TodoTemplate from "./components/TodoTemplate";
import { createGlobalStyle } from "styled-components";

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.is_login);
  const sessionKey = `firebase:authUser:${process.env.REACT_APP_API_KEY}:[DEFAULT]`;
  const isSession = sessionStorage.getItem(sessionKey) ? true : false;

  useEffect(() => {
    isSession && dispatch(getUserFB());
  }, []);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
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
