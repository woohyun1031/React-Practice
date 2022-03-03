import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getPostAxios, getPostFB, setNewPaging } from '../redux/modules/post';
import { logoutAxios, logoutFB } from '../redux/modules/user';

const Navbar = ({ isToken }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToMain = () => {
    dispatch(setNewPaging());
    dispatch(getPostAxios());
    navigate('/', { replace: true });
  };

  const goToLogin = () => {
    navigate('/login', { replace: true });
  };

  const goToRegister = () => {
    navigate('/register', { replace: true });
  };

  const _logout = () => {
    dispatch(logoutAxios({ navigate }));
  };

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  // if (isToken) {
  return (
    <Header>
      {/* <LogoBox onClick={goToMain}>
        <LogoImg src='/img/logo.png' alt='logo' />
        <Title>Magazine</Title>
      </LogoBox> */}
      <TodoHeadBlock>
      <h1>{dateString}</h1>
      <h3 className="day">{dayName}</h3>
    </TodoHeadBlock>
      {isToken ? (
        <div className='buttons'>
          <Button onClick={_logout}>로그아웃</Button>
        </div>
      ) : (
        <div className='buttons'>
          <Button onClick={goToLogin}>로그인</Button>
          <Button onClick={goToRegister}>회원가입</Button>
        </div>
      )}
    </Header>
  );
  // }

  //   return (
  //     <Header>
  //       <LogoBox onClick={goToMain}>
  //         <LogoImg src='/img/logo.png' alt='logo' />
  //         <Title>Magazine</Title>
  //       </LogoBox>
  //       <div className='buttons'>
  //         <Button onClick={goToLogin}>로그인</Button>
  //         <Button onClick={goToRegister}>회원가입</Button>
  //       </div>
  //     </Header>
  //   );
};

const Header = styled.header`
width: 100%;
padding: 2em 0;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #e9ecef;
// background-color: lightgrey;
`;

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }`

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImg = styled.img`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: 0.3em;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-family: 'Redressed', cursive;
`;

const Button = styled.button`
  padding: 0.2em 0.3em;
  margin-left: 0.5em;
  border-radius: 4px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.3);
`;

export default Navbar;
