import styled, { css } from "styled-components";
import React from "react";
import BucketList from "./Bucket";
import { MdAdd } from 'react-icons/md';


function App() {
  const [list, setList] = React.useState([]);
  //dict들을 배열로 만들어야 때문에 [] 안에 {} 입력
  const title = React.useRef(null);
  const contents = React.useRef(null);
  const example = React.useRef(null);
  let id_val = Date.now();

  const addList = (props) => { //화면에 보여지는게 아닌 단순 배열에 추가
    setList([...list, {id:id_val,
                      title:title.current.value, 
                      contents:contents.current.value,
                      example:example.current.value}]);    
  } 
  const onRemove = (id) => {
    console.log("작동")
    console.log(id)
    setList(list.filter( user => user.id !== id));
    console.log()
    console.log("완료")
  };
  return (
    <div className="App" style={{textAlign: "center"}}>
      <AppWrap>
        <Container>
          <h1>My <span style={{color:"#20c997"}}>D</span>ictionary</h1>
          <hr style={{height:"0.7px",backgroundColor:"#20c997"}}/>
          <BucketList list={list} onRemove={onRemove}/>
          <CircleButton>
            <MdAdd />
          </CircleButton>
        </Container>
        <InputBox>
          <p>단어</p><input id="input_box" type="text" ref={title} placeholder="단어를 입력하세요"/>
          <p>설명</p><input id="input_box" type="text" ref={contents} placeholder="설명을 입력하세요"/>
          <p>예시</p><input id="input_box" type="text" ref={example} placeholder="예시를 입력하세요"/>
          <button onClick={addList}>추가하기</button>
        </InputBox>
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
  height:40%;
  min-width: 250px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 30px auto 0px auto;
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
`;
const InputBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  background-color: #fff; 
  width: 60%;
  min-width: 250px;
  margin: 10px auto 50px auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 16px;  
  #input_box{
    margin-bottom:5px;    
  }
  p{
    text-align: left;
    font-size: 10px
  }
  button{
    margin-top :15px;
  }
`;


export default App;
