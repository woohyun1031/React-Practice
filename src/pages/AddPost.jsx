import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

//import dayjs from 'dayjs';

import styled from 'styled-components';

//import GridButton from '../components/GridButton';
import Button from '../elements/Button';

//import { resetGrid, setGrid } from '../redux/modules/grid';
import { addPostAxios, updatePostAxios } from '../redux/modules/post';
import { setPreview } from '../redux/modules/image';

const AddPost = () => {
  const preview = useSelector(state => state.image.preview);

  const userInfo = useSelector(state => state.user.user_info);

  //const gridStyle = useSelector(state => state.grid.grid);

  //location으로 pathname과 search값을 알 수 있다
  const location = useLocation();
  console.log(location,"Add post location")

  //edit인지 post인지 check를 위해
  const param = useParams(); //:postId
  //parm이 있으면 edit, 아님 post
  const isEdit = param.postId ? true : false;

  //content, image file value
  const contentRef = useRef();
  const fileRef = useRef();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit) {
      //dispatch(setGrid(location.state.grid));
      dispatch(setPreview(location.state.imageUrl));
      contentRef.current.value = location.state.content;
    }
  }, []);

  const selectPhoto = e => {
    const fileReader = new FileReader();
    const file = fileRef.current.files[0];

    fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      dispatch(setPreview(fileReader.result));
    };
  };

  const addNewPost = e => {
    console.log("addNewPost 실행")
    e.preventDefault();

    const contents = contentRef.current.value;
    if (contents === '' || !preview) {
      alert('사진 첨부와 게시글을 작성해주세요');
      return;
    }

    const newPost = {
      contents: contents,
      img_url: null,
      //grid: gridStyle,
    };

    //is Edit인지에 따라 
    !isEdit
      ? dispatch(addPostAxios({ postData: newPost, navigate }))
      : dispatch(
          updatePostAxios({
            boardId: param.postId,
            postData: {
              // ...location.state, //
              contents: contents,
              img_url: location.state.imageurl,
              //grid: gridStyle,
            },
            navigate,
          })
        );

    dispatch(setPreview(null));
    //dispatch(resetGrid());
  };

  return (
    <>
      {/* <GridButton grid={gridStyle} /> */}
      <PostForm onSubmit={addNewPost}>
        <img
          src={preview ? preview : 'http://via.placeholder.com/400x300'}
          alt=''
        />
        <textarea
          ref={contentRef}
          name='content'
          cols='30'
          rows='10'
          placeholder='게시글 작성'
          autoFocus
        ></textarea>
        <input ref={fileRef} onChange={selectPhoto} type='file' />
        <Button name={param.postId ? '게시글 수정' : '게시글 작성'} />
      </PostForm>
    </>
  );
};

const PostForm = styled.form`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default AddPost;
