import React from "react";
import { Button } from "../elements";
import { storage } from "./firebase";

const Upload = (props) => {
  const fileInput = React.useRef();

  const selectFile = (e) => {
    // e.target은 input이죠!
    // input이 가진 files 객체를 살펴봅시다.
    console.log(e.target.files);
    // 선택한 파일이 어떻게 저장되어 있나 봅시다.
    console.log(e.target.files[0]);

    // ref로도 확인해봅시다. :)
    console.log(fileInput.current.files[0]);
  };

  const uploadFB = () => {
    let image = fileInput.current?.files[0];
    const _upload = storage.ref(`images/${image.name}`).put(image);

    //   업로드!
    _upload.then((snapshot) => {
      console.log(snapshot);

      // 업로드한 파일의 다운로드 경로를 가져오자!
      snapshot.ref.getDownloadURL().then((url) => {
        console.log(url);
      });
    });
  };

  return (
    <React.Fragment>
      <input type="file" ref={fileInput} onChange={selectFile} />
      <button onClick={uploadFB}>업로드하기</button>
    </React.Fragment>
  );
};

export default Upload;
