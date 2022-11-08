import React from "react";

const Text = (props) => {
  const text = React.useRef(null);

  React.useEffect(() => {}, []);
  return <h1 ref={text}>텍스트입니다!</h1>;
};

export default Text;
