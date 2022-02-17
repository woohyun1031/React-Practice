import styled, { css } from "styled-components";
import React from "react";
import BucketList from "./Bucket";
import InputList from "./InputList";
import { MdAdd } from 'react-icons/md';
import {Route, useHistory }  from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux";
import { changeToggle, loadBucketFB } from "./redux/modules/bucket";


function App() {
  const dispatch = useDispatch();  
  const open = useSelector((state) => state.bucket.open);
  const history = useHistory();
  
  React.useEffect(() => {
    console.log("useeffect on")    
    dispatch(loadBucketFB());    
    // const query = await getDocs(collection(db, 'bucket'));
    // query.forEach((doc) => {
    //   console.log(doc.data());
    // });
    // return (()=>{
    //     console.log("useeffect off");
    //   }) 
  }, [])

  const onToggle = () => {
    dispatch(changeToggle(open)).open ?  history.push("/") : history.push("/input");    
  }

  

  return (
    <div className="App" style={{textAlign: "center"}}>      
        <AppWrap>
          <Container>
            <h1>My <span style={{color:"#20c997"}}>D</span>ictionary</h1>
            <hr style={{height:"0.7px",backgroundColor:"#20c997"}}/>
            <Route exact path="/" ><BucketList/></Route>
            <Route path="/input"><InputList/></Route>
            <CircleButton onClick={onToggle} open={open}>
              <MdAdd />
            </CircleButton>
          </Container>
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
