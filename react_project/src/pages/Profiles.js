import React from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <ProfileListBlock>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>유저를 선택해주세요</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </ProfileListBlock>
  );
};

const ProfileListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default Profiles;
