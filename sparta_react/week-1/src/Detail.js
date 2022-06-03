import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket, updateBucket } from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);

  return (
    <div>
      {console.log("render")}
      <h1>{bucket_list[bucket_index].text}</h1>
      <button
        onClick={() => {
          dispatch(updateBucket(bucket_index));
        }}
      >
        완료하기
      </button>
      <button
        onClick={() => {
          history.replace("/");
        }}
      ></button>
      <button
        onClick={() => {
          console.log("삭제하기 버튼을 눌렀어!");
          dispatch(deleteBucket(bucket_index));
          history.replace("/");
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default Detail;
