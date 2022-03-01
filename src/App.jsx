import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPost from './pages/AddPost';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import TodoTemplate from "./components/TodoTemplate";
import { createGlobalStyle } from "styled-components";
function App() {
  return (
    <>
    <GlobalStyle />
    <TodoTemplate>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<AddPost />} />
        <Route path="/edit/:postId" element={<AddPost />} />
        <Route path="/post/:postId" element={<Detail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
