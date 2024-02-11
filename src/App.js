import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  // state의 장점은 데이터가 변경 되면 자동으로 재렌더링 됨. 
  // state가 아닌 변수로 지정 시 새로고침으로 변경 됨.
  // 제목 같은 경우는 수시로 바뀌는것이 아니기 때문으로 state로 관리 하지 않아도 됨.

  let [title, setTitle] = useState(['Intro', 'Gallery', 'Infomation']);
  let [date, setDate] = useState(['2월 17일 발행', '2월 18일 발행', '2월 19일 발행']);
  let [num, setNum] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>Blog</div>
      </div>
      <div className='list'>
          <h3>{title[0]} <span className='sugg' onClick={ () => setNum(num++)}>👍</span> {num} </h3>
          <p>{date[0]}</p>
          <hr />
      </div>

    <Modal></Modal>
      {/* <div className='modal'>
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
      </div> */}
    </div>
  )
}

export default App;
