import React,{useEffect} from 'react';
import styled from 'styled-components';
import PostCard from '../components/PostCard';
import { FaPlusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostAxios, getPostFB } from '../redux/modules/post';
import InfinityScroll from '../components/InfinityScroll';

const Main = ({ isToken }) => {
  console.log(isToken,"Main token")
  const { data, is_loading, paging } = useSelector(state => state.post);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(data,"main page data")
  console.log(is_loading,"main page is_loading")
  console.log(paging,"main page paging")
  
  useEffect(() => {
    dispatch(getPostAxios());
}, []);

  //isToken 따라서
  const addPost = () => {
    console.log(isToken,"addpostCheck token")
    if (!isToken) {
      alert('로그인 후 작성해주세요');
      navigate('/login');
      return;
    }
    navigate('/post');
  };

  return (
    // <InfinityScroll
    //   callNext={() => {
    //     dispatch(getPostAxios());
    //   }}
    //   is_next={paging.load ? true : false}
    //   loading={is_loading}
    // >
    <ListBox>
      {data.map(card => (
        <PostCard key={card.create_date} card={card} />
      ))}
      <AddButton onClick={addPost}>
        <FaPlusCircle />
      </AddButton>
    </ListBox>
    // </InfinityScroll>
  );
};

const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AddButton = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 1.5rem;
  font-size: 5rem;
`;

export default Main;
