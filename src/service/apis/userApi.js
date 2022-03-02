import axios from "axios";

//승훈님:13.124.233.197
//광훈님:15.164.99.92
class UserApi {
  constructor() {
    // this.base = 'http://localhost:3000'; // 서버 ip 주소로 바꾸기
    this.base = "http://13.124.233.197";
  }
  //registerData = {
  //  username: email,
  //  name: nickname,
  //  password: pw,
  //  check_password: pwCheck,
  //};
  async signUp({ registerData, navigate }) {
    console.log(registerData, "registerData in api");
    const sighupConfig = {
      method: "post",
      url: `${this.base}/api/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(registerData),
      // JavaScript 값이나 객체를 JSON 문자열로 변환
    };

    return (
      axios(sighupConfig) //위 config를 axios로 요청 ㄱㄱ
        //return이후 실행(then)
        .then((res) => {
          //res => axios로 요청 보낸 후 돌아오는 값
          console.log(res, "result");
          alert(res.data.msg, "성공이요");
          alert("회원가입에 성공했습니다. 로그인 페이지로 이동합니다.");
          navigate("/login", { replace: true });
          return res.data;
        })
        //error catch
        .catch((err) => {
          console.log(err, "err");
          console.log(err.message);
          alert(err.response.data.msg + "회원가입 에러요");
        })
    );
  }

  //loginData = {
  //  username: email,
  //  password: pw,
  //}
  async signIn({ loginData, navigate }) {
    console.log(loginData, "loginData in api");
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
        console.log(res, "result in response api");
        //res에서 tocken을 빼 올 방법을 생각
        // alert(res.data.msg);
        if (res.status === 200) {
          alert("로그인에 성공했습니다. 메인 페이지로 이동합니다.");
          navigate("/", { replace: true });
          return res;
        }
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
