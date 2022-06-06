import React from "react";

export const TextArea = ({ text }) => {
  return (
    <div style={{ width: "50vw", border: "1px solid #888", minHeight: "20vh" }}>
      <pre>{text}</pre>
    </div>
  );
};

export const Button = ({ input_ref, setText }) => {
  return (
    <button
      onClick={() => {
        // console.log(input_ref.current.value);
        setText(input_ref.current.value);
        input_ref.current.value = "";
      }}
    >
      완성
    </button>
  );
};

export const Input = ({ input_ref }) => {
  return <input ref={input_ref} />;
};
