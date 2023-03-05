import * as React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupComponent() {
  const navigate = useNavigate();
  const submitButton = async (event) => {
    event.preventDefault();
    const user = {
      id: event.target.id.value,
      pw: event.target.pw.value,
      name: event.target.name.value,
    }

    await axios.post('http://ec2-43-201-99-215.ap-northeast-2.compute.amazonaws.com:5004/auth/join',user, { withCredentials: true })
      .then(res => {
        if(res.data === 2){
          alert('해당 아이디가 이미 있습니다.');
        } else if(res.data === 3){
          alert('디비 에러');
        } else{
          alert('회원가입 성공');
          navigate('/');
        }
      });
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

export default SignupComponent;