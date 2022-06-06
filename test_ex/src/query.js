import React from "react";
import "./App.css";
import { useQuery } from "react-query";
import axios from "axios";
// promise를 반환합니다!
// mock api에서 sleepList를 가져와요
const getSleepList = () => {
  return axios.get("http://localhost:5001/sleep_times");
};
function App() {
  const sleep_query = useQuery("sleep_list", getSleepList, {
    onSuccess: (data) => {
      console.log("성공했어!", data);
    },
  });

  return (
    <div className="App">
      <div>
        {sleep_query?.data?.data?.map((d) => {
          return (
            <div>
              <p>{d.day}</p> <p>{d.sleep_time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
