import axios from "axios";
import { setOnePost } from "../../redux/modules/postdetail";
import { logoutAxios } from "../../redux/modules/user";
import { getCookie } from "../../shared/Cookie";

//승훈님:13.124.233.197
//광훈님:15.164.99.92
//현우님:3.36.64.184:8080

class PostApi {
  constructor() {
    this.base = "http://13.124.233.197";
    //this.base = "http://15.164.99.92";
    //this.base = process.env.REACT_APP_BE_IP_LYW;
  }

  async getPosts() {
    console.log("get post Axios start");
    const getpostConfig = {
      method: "get",
      url: `${this.base}/api/posts`,
      headers: {},
    };

    return axios(getpostConfig)
      .then((res) => {
        console.log(res, "result in get post api");
        return res.data;
      })
      .catch((err) => {
        console.log(err, "err in get post api");
        console.log(err.messages, "err.messages in get post api");
      });
  }

  async addPost({ data, navigate }) {
    console.log(data, "addpost axios data");
    const token = getCookie("token");
    console.log(token);
    const addpostConfig = {
      method: "post",
      url: `${this.base}/api/posts`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": token,
      },
      data: JSON.stringify(data),
    };

    return axios(addpostConfig)
      .then((res) => {
        console.log(res, "addpost axios res");
        alert("게시글 등록이 완료되었습니다.");
        navigate(`/post/${res.data.post_id}`, { replace: true });
        return res.data;
      })
      .catch((err) => {
        alert("게시글 등록이 완료되지 않았습니다. 다시 시도해보세요.");
        console.log(err);
        console.log(err.message);
      });
  }

  async deletePost({ username, boardId, navigate }) {
    const deletepostConfig = {
      method: "delete",
      url: `${this.base}/api/board/${boardId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": sessionStorage.getItem("token"),
      },
      data: JSON.stringify({ username: username }),
    };

    return axios(deletepostConfig)
      .then((res) => {
        console.log(res);
        alert("해당 게시글이 삭제되었습니다");
        navigate("/", { replace: true });
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  }

  async editPost({ boardId, postData, navigate }) {
    const editpostConfig = {
      method: "put",
      url: `${this.base}/api/board/${boardId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": sessionStorage.getItem("token"),
      },
      data: JSON.stringify(postData),
    };
    console.log(postData);
    console.log(editpostConfig.url);

    return axios(editpostConfig)
      .then((res) => {
        console.log(res);
        alert("게시글 수정이 완료되었습니다.");
        navigate(`/post/${boardId}`);
        return true;
      })
      .catch((err) => {
        alert("게시글 수정이 완료되지 않았습니다. 다시 시도해주세요.");
        console.log(err);
        console.log(err.message);
        console.log(err.response);
        return false;
      });
  }

  async getOnePost({ boardId, dispatch }) {
    const getonepostConfig = {
      method: "get",
      url: `${this.base}/api/board/${boardId}`,
      headers: { "X-AUTH-TOKEN": sessionStorage.getItem("token") },
    };

    return axios(getonepostConfig)
      .then((res) => {
        console.log(res);
        dispatch(setOnePost(res.data.boardResponseDto));
        return res.data;
      })
      .catch((err) => {
        // 다시 불러오기..? 아니면 에러페이지로 이동..?
        console.log(err);
        console.log(err.message);
      });
  }

  async postLike({ userid, boardId, navigate, dispatch }) {
    const postlikeConfig = {
      method: "post",
      url: `${this.base}/api/board/${boardId}/like`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": sessionStorage.getItem("token"),
      },
      data: JSON.stringify({ userId: userid }),
    };
    console.log(postlikeConfig.data);

    return axios(postlikeConfig)
      .then((res) => {
        console.log(res);
        alert("좋아요 성공");
        return true;
      })
      .catch((err) => {
        alert("좋아요 실패");
        console.log(err);
        console.log(err.message);
        console.log(err.response);
        if (err.response.data.status === 403) {
          alert("로그인 시간이 만료되었어요. 다시 로그인해주세요.");
          dispatch(logoutAxios({ navigate }));
        }
        return false;
      });
  }

  async postLikeCancel({ userid, boardId, navigate, dispatch }) {
    const postlikecancelConfig = {
      method: "delete",
      url: `${this.base}/api/board/${boardId}/like`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": sessionStorage.getItem("token"),
      },
      data: JSON.stringify({ userId: userid }),
    };

    return axios(postlikecancelConfig)
      .then((res) => {
        alert("좋아요 취소 성공");
        console.log(res);
        return true;
      })
      .catch((err) => {
        alert("좋아요 취소 실패");
        console.log(err);
        console.log(err.message);
        console.log(err.response);
        if (err.response.data.status === 403) {
          alert("로그인 시간이 만료되었어요. 다시 로그인해주세요.");
          dispatch(logoutAxios({ navigate }));
          navigate("/", { replace: true });
        }
        return false;
      });
  }
}

export default PostApi;
