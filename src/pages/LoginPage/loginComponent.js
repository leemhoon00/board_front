import * as React from "react";

class LoginComponent extends React.Component{
  submitEvent = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}>
        <form className="row" style={{
          
          
        }}>
          <input name="id" class="col-12" placeholder="아이디" required type="text"/>
          <input name="pw" class="col-12" placeholder="비밀번호" required type="password" />
        </form>
      </div>
    );
  }
}

export default LoginComponent;