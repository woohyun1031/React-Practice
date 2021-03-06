import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const Login = ({ isToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isToken) {
      alert('이미 로그인이 되어있습니다.');
      navigate('/');
    }
  });

  return (
    <>
      <Title>로그인</Title>
      <LoginForm />
    </>
  );
};

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 1em 0;
`;

export default Login;
