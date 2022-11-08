import React from "react";
import Text from "./Text";
import styled, { keyframes } from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.circle = React.createRef(null);
  }
  hoverEvent = (e) => {
    // 콘솔로 이 이벤트가 누구에게서 일어났는 지 확인할 수 있습니다.
    console.log(e.target);
    // ref랑 같은 녀석인 지 확인해봐요!
    console.log(this.circle.current);

    this.circle.current.style.background = "yellow";
  };

  componentDidMount() {
    // 리액트 요소가 잘 잡혔나 확인해봅시다!
    console.log(this.circle);

    // 마우스를 올렸을 때, 이벤트가 일어나는 지 확인해봅시다.
    this.circle.current.addEventListener("mouseover", this.hoverEvent);
  }

  componentWillUnmount() {
    this.circle.current.removeEventListener("mouseover", this.hoverEvent);
  }
  render() {
    return (
      <div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
        <Text />
        <div
          style={{
            margin: "auto",
            width: "250px",
            height: "250px",
            background: "green",
            borderRadius: "250px",
          }}
          ref={this.circle}
        ></div>
        <Box></Box>
      </div>
    );
  }
}

export default App;

const boxFade = keyframes`
  0% {
    opacity: 1;
    top: 20px;

  }
  50% {
    opacity: 0;
    top: 400px;
  }
  100% {
    opacity: 1;
    top: 20px;
  }
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: green;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxFade} 2s 1s infinite linear alternate;
`;
