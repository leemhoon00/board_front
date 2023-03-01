import axios from 'axios';

function BoardsComponent() {
  const ClickEvent = async (event) => {
    await axios.post('http://localhost:3001/auth/test',{ddd:'ddd'},{
      withCredentials: true
    })
      .then((res) => {
        console.log(res);
      });
  }
  return(
    <div>
      <button onClick={ClickEvent}>OK</button>
    </div>
  );
}

export default BoardsComponent;