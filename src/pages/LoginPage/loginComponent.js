import * as React from "react";
import { Link } from "react-router-dom";

class LoginComponent extends React.Component{
  
  render() {
    const signupEvent = (event) => {
      console.log('aaa');
    }
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}>
        <form className="row form-group" style={{
        }}>
          <input name="id" className="col-12 form-control" placeholder="아이디" required type="text"/>
          <input name="pw" className="col-12 form-control" placeholder="비밀번호" required type="password" />
          <button type="submit" className="col-6 btn btn-primary">로그인</button>
          <Link to="/signup" className="col-6 btn btn-primary" onClick={signupEvent}>회원가입</Link>
        </form>
      </div>
    );
  }
}

export default LoginComponent;