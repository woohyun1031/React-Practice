import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Text from "./Text";

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
      </div>
    );
  }
}

export default App;
