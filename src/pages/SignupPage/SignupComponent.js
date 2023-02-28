import * as React from "react";

class SignupComponent extends React.Component {
  render() {
    const submitButton = (event) => {
      event.preventDefault();
      const user = {
        id: event.target.id.value,
        pw: event.target.pw.value,
        name: event.target.name.value,
      }

      
    }
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}>
        <form onSubmit={submitButton} className="row form-group">
          <input name="id" className="col-12 form-control" placeholder="아이디" required type="text"/>
          <input name="pw" className="col-12 form-control" placeholder="비밀번호" required type="password" />
          <input name="name" className="col-12 form-control" placeholder="이름" required type="text" maxLength={15}/>
          <button type="submit" className="btn btn-primary">회원가입</button>
        </form>
      </div>
    );
  }
}

export default SignupComponent;