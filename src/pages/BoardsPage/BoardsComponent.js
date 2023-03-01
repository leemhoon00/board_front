import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store';

function BoardsComponent() {
  const user = useRecoilValue(userState);
  return(
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <h1>게시판</h1>
      <label>{user}</label>
    </div>
  );
}

export default BoardsComponent;