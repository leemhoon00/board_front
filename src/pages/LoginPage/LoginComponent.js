import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../store';


function LoginComponent() {
  const navigate = useNavigate();

  const [getUser, setUser] = useRecoilState(userState);

  const loginEvent = async (event) => {
    event.preventDefault();
    const user = {
      id: event.target.id.value,
      pw: event.target.pw.value,
    };
    await axios.post('http://localhost:3001/auth/login', user, { withCredentials: true })
      .then((res) => {
        console.log(res);
        if(res.status === 200){
          setUser(user.id);
          navigate('/boards');
        } else if(res.data === 2){
          alert('비밀번호가 틀렸습니다.');
        } else if(res.data === 3){
          alert('해당 사용자가 없습니다.');
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
    }}>
      <form onSubmit={loginEvent} className="row form-group">
        <input name="id" className="col-12 form-control" placeholder="아이디" required type="text"/>
        <input name="pw" className="col-12 form-control" placeholder="비밀번호" required type="password" />
        <button type="submit" className="col-6 btn btn-primary">로그인</button>
        <Link to="/signup" className="col-6 btn btn-primary">회원가입</Link>
        <button>{getUser}</button>
      </form>
    </div>
  );
}

export default LoginComponent;