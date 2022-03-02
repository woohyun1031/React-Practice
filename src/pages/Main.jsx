import React from 'react';
import styled from 'styled-components';
import PostCard from '../components/PostCard';
import { FaPlusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostAxios, getPostFB } from '../redux/modules/post';
import InfinityScroll from '../components/InfinityScroll';

const Main = ({ isLogin }) => {
  const { data, is_loading, paging } = useSelector(state => state.post);
  //data:{
  // "boardId": "0",
  // "creater": "sunny",
  // "content": "첫번째 게시글 입니다",
  // "imageurl": "https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg",
  // "grid": "column",
  // "likeCount": "2",
  // "createdAt": "2022-02-19 18:00:00",
  // "likes": [{ "userid": "0" }, { "userid": "1" }]
  // },
  //is_loading:
  //paging:
  console.log(data,"main page data")
  console.log(is_loading,"main page is_loading")
  console.log(paging,"main page paging")
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //isLogin에 따라서
  const addPost = () => {
    if (!isLogin) {
      alert('로그인 후 작성해주세요');
      navigate('/login');
      return;
    }
    navigate('/post');
  };

  return (
    <InfinityScroll
      callNext={() => {
        dispatch(getPostAxios());
      }}
      is_next={paging.load ? true : false}
      loading={is_loading}
    >
    <ListBox>
      {data.map(card => (
        <PostCard key={card.create_date} card={card} />
      ))}
      <AddButton onClick={addPost}>
        <FaPlusCircle />
      </AddButton>
    </ListBox>
    </InfinityScroll>
  );
};

const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

const AddButton = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 1.5rem;
  font-size: 2rem;
`;

export default Main;
