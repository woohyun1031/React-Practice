import React from "react";
import { Route, Routes } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";

import TodoListBlock from "./components/Todoimport";

import { TodoProvider } from "./context/TodoContext";
import { UsersProvider } from "./redux/modules/users";

import Users from "./components/Users";
import Profiles from "./components/Profiles";
import Sidebar from "./components/Sidebar";
import ContainerBox from "./containers/ContainerBox";

function App() {
  return (
    <React.Fragment>
      <UsersProvider>
        <TodoProvider>
          <GlobalStyle />
          <Sidebar />
          <TodoTemplate>
            <TodoHead />
            <Routes>
              <Route path="/" element={<TodoListBlock />} />
              <Route path="/users" element={<Users />} />
              <Route path="profiles/*" element={<Profiles />} />
              <Route path="/containerbox" element={<ContainerBox />} />
            </Routes>
          </TodoTemplate>
        </TodoProvider>
      </UsersProvider>
    </React.Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default App;
