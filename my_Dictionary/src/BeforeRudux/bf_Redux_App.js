import styled, { css } from "styled-components";
import React from "react";
import BucketList from "./Bucket";
import InputList from "./InputList";
import { MdAdd } from 'react-icons/md';
import {Route, useHistory }  from 'react-router-dom'


function App() {
  const [list, setList] = React.useState([]);
  //dict들을 배열로 만들어야 때문에 [] 안에 {} 입력
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const onToggle = () => {
    setOpen(!open);
    open ?  history.push("/") : history.push("/input");
  }

  const onAddList = (props) => { //화면에 보여지는게 아닌 단순 배열에 추가
    setList([...list, {id:props.id_val,
                      title:props.title, 
                      contents:props.contents,
                      example:props.example}]);  
    {onToggle()}      
  } 

  const onRemove = (id) => {
    setList(list.filter( user => user.id !== id));
  };
  return (
    <div className="App" style={{textAlign: "center"}}>      
        <AppWrap>
          <Container>
            <h1>My <span style={{color:"#20c997"}}>D</span>ictionary</h1>
            <hr style={{height:"0.7px",backgroundColor:"#20c997"}}/>
            <Route exact path="/" ><BucketList list={list} onRemove={onRemove}/></Route>
            <Route path="/input"><InputList list={list} onAddList={onAddList}/></Route>

            <CircleButton onClick={onToggle} open={open}>
              <MdAdd />
            </CircleButton>
          </Container>
          {/* <InputBox>
            <p>단어</p><input id="input_box" type="text" ref={title} placeholder="단어를 입력하세요"/>
            <p>설명</p><input id="input_box" type="text" ref={contents} placeholder="설명을 입력하세요"/>
            <p>예시</p><input id="input_box" type="text" ref={example} placeholder="예시를 입력하세요"/>
            <button onClick={onAddList}>추가하기</button>
          </InputBox>  */}
        </AppWrap>
    </div>
  );
}


const AppWrap = styled.div`  
  background-color: #e9ecef;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  position: relative;   
  width: 60%;
  height:100%;
  min-width: 250px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 150px auto 200px auto;
  border-radius:16px;
  border: 1px solid #ddd;  
`;

const CircleButton = styled.button`

  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 1;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left:50%;
  bottom:0;

  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;

  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
export default App;
