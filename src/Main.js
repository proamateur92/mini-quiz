import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { userCreate } from './redux/modules/user';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
  const inputUserName = useRef('');
  const quiz = useSelector(state => state.quiz);
  const user = useSelector(state => state.user);
  const quizId = Math.floor(Math.random() * quiz.length);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nextStep = () => {
    const name = inputUserName.current.value;
    if (name.trim() === '' || name.length < 3) {
      alert('2글자 이상의 이름을 입력해주세요.');
      inputUserName.current.value = '';
      inputUserName.current.focus();
      return;
    }

    dispatch(userCreate(name, quizId));
    inputUserName.current.value = '';
    setTimeout(() => {
      navigate(`/quiz/${quizId}/0`);
    }, 400);
  };
  return (
    <div>
      <h1>메인페이지</h1>
      {user.name === '' ? <h1>안녕하세요!</h1> : <h1>{user.name}님 반갑습니다!</h1>}
      <input ref={inputUserName} type='text' placeholder='이름을 입력해주세요.'></input>
      <button onClick={nextStep}>시작하기</button>
    </div>
  );
};

export default Main;
