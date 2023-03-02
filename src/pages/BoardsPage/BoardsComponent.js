import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store';
import { useNavigate } from 'react-router-dom';

function BoardsComponent() {
  const user = useRecoilValue(userState);

  const navigate = useNavigate();

  const clickEvent = (event) => {
    axios.post('http://localhost:3001/auth/test',{},{withCredentials: true});
  }

  const LogoutEvent = (event) => {
    axios.get('http://localhost:3001/auth/test', {withCredentials: true})
      .then((res) => {
        navigate('/');
      })
  }
  return(
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <h1>게시판</h1>
      <label>{user}</label><br></br>
      <button onClick={clickEvent}>OK</button>
      <button onClick={LogoutEvent}>LOGOUT</button>
    </div>
  );
}

export default BoardsComponent;