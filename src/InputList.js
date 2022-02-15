import React from "react";
import styled from "styled-components";

const InputList = (props) => {   
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
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
   
    return (
        <InputBox>
            <p>단어</p><input id="input_box" type="text" ref={title} placeholder="단어를 입력하세요"/>
            <p>설명</p><input id="input_box" type="text" ref={contents} placeholder="설명을 입력하세요"/>
            <p>예시</p><input id="input_box" type="text" ref={example} placeholder="예시를 입력하세요"/>
            <button onClick={addList}>추가하기</button>
        </InputBox> 
    );
}

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
export default InputList