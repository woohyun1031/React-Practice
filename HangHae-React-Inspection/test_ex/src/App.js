import React from "react";
import { Routes, Route } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

import { Cat } from "./Cat";
import { Dog } from "./Dog";

const getSleepList = () => {
  return axios.get("http://localhost:5001/sleep_times");
};
const addSleepData = (data) => {
  return axios.post("http://localhost:5001/sleep_times", data);
};

function App() {
  const day_input = React.useRef();
  const time_input = React.useRef();

  const sleep_query = useQuery("sleep_list", getSleepList, {
    onSuccess: (data) => {
      console.log("성공했어!", data);
    },
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation(addSleepData, {
    onSuccess: () => {
      // key를 넣지 않을 경우 모든 쿼리가 무효화됩니다.
      // mutation을 성공하면 수면 데이터 목록을 불러오는 useQuery를 무효화 시켜줍니다!
      queryClient.invalidateQueries("sleep_list");
      day_input.current.value = "";
      time_input.current.value = "";
    },
  });

  if (sleep_query.isLoading) {
    return null;
  }

  return (
    <div className="App">
      {sleep_query?.data?.data?.map((d, index) => {
        return (
          <div key={index}>
            <p>{d.day}</p>
            <p>{d.sleep_time}</p>
          </div>
        );
      })}
      <input ref={day_input} />
      <input ref={time_input} />
      <button
        onClick={() => {
          if (
            day_input.current.value === "" ||
            time_input.current.value === ""
          ) {
            return;
          }
          const data = {
            day: day_input.current.value,
            sleep_time: time_input.current.value,
          };

          mutate(data);
        }}
      >
        데이터 추가하기
      </button>
      <Routes>
        <Route path="/cat" element={<Cat />} />
        <Route path="/" element={<Dog />} />
      </Routes>
    </div>
  );
}

export default App;
