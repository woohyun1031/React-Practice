import {
  uploadString,
  getStorage,
  ref,
  getDownloadURL,
} from "firebase/storage";
import firebaseApp from "./firebase";

class FBstorage {
  constructor() {
    this.storage = getStorage(firebaseApp);
    console.log(this.storage, "storage get!!");
  }

  async uploadFile(file) {
    console.log(file, "uploadFile file");

    const filename = `images/${new Date().getTime()}`;
    console.log(filename, "filename 대기");

    const storageRef = ref(this.storage, filename);
    console.log(storageRef, "storageRef 이미지 업로드 대기");

    return uploadString(storageRef, file, "data_url") //storate에 올리기
      .then(() => getDownloadURL(ref(this.storage, filename)))
      .catch((err) => console.log("이미지 업로드 에러", err));
  }
}

export default FBstorage;
