import axios from "axios";

class UserApi {
  constructor() {
    // this.base = 'http://localhost:3000'; // 서버 ip 주소로 바꾸기
    this.base = "http://15.164.99.92";
  }

  async signUp({ registerData, navigate }) {
    const sighupConfig = {
      method: "post",
      url: `${this.base}/api/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(registerData),
    };

    return axios(sighupConfig)
      .then((res) => {
        console.log(res, "result");
        alert(res.data.msg, "성공이요");
        // alert('회원가입에 성공했습니다. 로그인 페이지로 이동합니다.');
        navigate("/login", { replace: true });
        return res.data;
      })
      .catch((err) => {
        console.log(err, "err");
        console.log(err.message);
        alert(err.response.data.msg + "회원가입 에러요");
      });
  }

  async signIn({ loginData, navigate }) {
    const signinConfig = {
      method: "post",
      url: `${this.base}/api/signin`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(loginData),
    };

    return axios(signinConfig)
      .then((res) => {
        console.log(res, "result");
        // alert(res.data.msg);
        alert("로그인에 성공했습니다. 메인 페이지로 이동합니다.");
        navigate("/", { replace: true });
        return res.data;
      })
      .catch((err) => {
        alert(err.response.data.msg, "로그인에러요");
        console.log(err);
        console.log(err.messages);
      });
  }

  async signOut({ navigate }) {
    const signoutConfig = {
      method: "post",
      url: `${this.base}/api/logout`,
      headers: {
        "X-AUTH-TOKEN": sessionStorage.getItem("token"),
      },
    };

    return axios(signoutConfig)
      .then((res) => {
        console.log(res);
        alert("로그아웃에 성공하셨습니다");
        navigate("/", { replace: true });
        return true;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.messages);
        alert(err.response.data.msg, "로그아웃에러요");
        return false;
      });
  }
}

export default UserApi;
