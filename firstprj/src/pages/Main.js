import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/**
 *
 * 할일 부터 정리하고 시작할까요!
 *
 * 1. til을 보여줄 뷰가 필요해!
 * 2. til 제목, 내용, 공부시간을 기입할 인풋이 필요해!
 * 3. 인풋 내용을 하나로 묶어줘야해!
 * 4. 묶어준 til data를 뷰로 넣어줘야해! -> state를 사용하자!
 * 5. til list가 뷰에 뿌려져야해!
 *
 * 각 단계마다 어떻게 해야하는 지 잠시 고민해보고 시작하세요! :)
 */

function Main() {
  const navigate = useNavigate();
  const til_list = useSelector((store) => store.til.til_list);

  const callSomething = () => {
    let data = {
      id: 8,
      day: "일",
      sleep_time: "10:00",
    };

    axios.get("http://localhost:5001/sleep_times");
  };

  console.log(til_list);

  return (
    <>
      <div
        style={{
          borderRight: "1px solid #065880",
          width: "20vmin",
          height: "100vmin",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <p>1월</p>
        <p>2월</p>
        <p>3월</p>
        <p>4월</p>
      </div>
      <div
        style={{
          margin: "0 auto",
          padding: "1rem",
          width: "60vmin",
        }}
      >
        <div
          className="title-area"
          style={{
            borderBottom: "1px solid #ccc",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>TIL</h1>
          <button
            style={{
              color: "#fff",
              background: "#065880",
              border: "none",
              borderRadius: "3rem",
              width: "3rem",
              height: "3rem",
              margin: "auto 0",
            }}
            onClick={() => {
              navigate("/write");
            }}
          >
            추가
          </button>
        </div>
        <button onClick={callSomething}>test</button>

        <div className="til-list">
          {til_list.map((til, idx) => {
            return (
              <div
                className="til-item"
                key={idx}
                style={{
                  border: "1px solid #888",
                  marginBottom: "2rem",
                  padding: ".5rem",
                }}
              >
                <h3>{til.title}</h3>
                <p>{til.content}</p>
                <p>{til.time}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
