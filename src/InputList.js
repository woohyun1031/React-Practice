import React from "react";
import styled from "styled-components";

const InputList = (props) => {   
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    const onAddList = props.onAddList    
    const title = React.useRef(null);
    const contents = React.useRef(null);
    const example = React.useRef(null);
    let id_val = Date.now();
   
    return (
        <InputBox>
            <p>단어</p><input id="input_box" type="text" ref={title} placeholder="단어를 입력하세요"/>
            <p>설명</p><input id="input_box" type="text" ref={contents} placeholder="설명을 입력하세요"/>
            <p>예시</p><input id="input_box" type="text" ref={example} placeholder="예시를 입력하세요"/>
            <button onClick={() => onAddList({title:title.current.value, contents:contents.current.value,example:example.current.value,id_val:id_val})}>추가하기</button>
        </InputBox> 
    );
}

const InputBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  background-color: #fff; 
  width: 60%;
  height: 30vh;
  min-width: 250px;
  margin: 30px auto 50px auto;
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
export default InputList