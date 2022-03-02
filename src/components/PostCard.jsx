import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostCardContent from './PostCardContent';
import PostCardFooter from './PostCardFooter';
import PostCardHeader from './PostCardHeader';

const PostCard = memo(({ card }) => {
  const isLogin = useSelector(state => state.user.is_login);
  const param = useParams();
  const isDetail = param.postId ? true : false;
  console.log(card,"card list")
  const {
    post_id,
    user_id,
    contents,
    img_url,
    //grid,
    like_cnt,
    create_date,
    //likes,
  } = card;

  const navigate = useNavigate();

  const goToDetail = e => {
    !isDetail && isLogin && navigate(`/post/${post_id}`);
  };

  return (
    <CardBox onClick={goToDetail} className={isDetail ? 'detail' : 'main'}>
      <StyleBox>
        <PostCardHeader creater={user_id} date={create_date} />
        <PostCardContent content={contents} image={img_url} />
        <PostCardFooter
          //card={card}
          likeCount={like_cnt}
          //likes={likes}
          boardId={post_id}
        />
      </StyleBox>
    </CardBox>
  );
});

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media screen and (max-width: 40rem) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  &.detail {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const StyleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0.3em;
  padding: 1em;
  width: calc(100%-0.6em);
  border: 2px solid lightgrey;
  border-radius: 8px;
  // background-color: lightblue;
`;

export default PostCard;
