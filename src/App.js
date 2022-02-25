import React from "react";
import { Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";

import TodoListBlock from "./components/Todoimport";

import { TodoProvider } from "./context/TodoContext";
import { UsersProvider } from "./context/UsersContext";

import Users from "./components/Users";
import Profiles from "./components/Profiles";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <React.Fragment>
      <UsersProvider>
        <TodoProvider>
          <GlobalStyle />
          <TodoTemplate>
            <TodoHead />
            <Route path="/" exact={true} component={TodoListBlock} />
            <Route path="/users" component={Users} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/countercontainer" component={CounterContainer} />
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
