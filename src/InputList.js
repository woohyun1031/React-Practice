import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { createBucket,changeToggle } from "./redux/modules/bucket";

const InputList = (props) => {   

    const open = useSelector((state) => state.bucket.open);
    const dispatch = useDispatch();           
    const history = useHistory();
    
    const title = React.useRef(null);
    const contents = React.useRef(null);
    const example = React.useRef(null);
    let id_val = Date.now();

    const onAddList = (props) => { //화면에 보여지는게 아닌 단순 배열에 추가
      console.log(props,"props")
      dispatch(createBucket(props));

      let change_open = dispatch(changeToggle(open)).open;
      change_open ?  history.push("/") : history.push("/input");    
    } 
   
    return (
        <InputBox>
            <p>단어</p><input id="input_box" type="text" ref={title} placeholder="단어를 입력하세요"/>
            <p>설명</p><input id="input_box" type="text" ref={contents} placeholder="설명을 입력하세요"/>
            <p>예시</p><input id="input_box" type="text" ref={example} placeholder="예시를 입력하세요"/>
            <button onClick={() => onAddList({title:title.current.value, 
                                              contents:contents.current.value,
                                              example:example.current.value,
                                              id_val:id_val})}>
              추가하기
            </button>
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
    font-size: 12px
  }
  button{
    height:25px;
    border:1px solid #20c997;;
    border-radius: 16px;  
    background-color:#20c997;
    color:white;
    margin-top :25px;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    cursor:pointer;
  }
  button:hover{
    transform:translate(0,-7px);
  }
`;
export default InputList