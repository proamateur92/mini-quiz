import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { quizInit } from './redux/modules/quiz';
import { userInit } from './redux/modules/user';
import {} from './redux/modules/user';

const Main = () => {
  const { quizId } = useParams();
  const thisQuiz = useSelector(state => state.quiz);
  const thisUser = useSelector(state => state.user);
  const numQuizId = Number(quizId);
  const realAnswer = thisQuiz[numQuizId].answer;
  const userAnswer = thisQuiz[numQuizId].userAnswer;

  const score =
    realAnswer.reduce((acc, val, idx) => {
      return acc + (val === userAnswer[idx] ? 1 : 0);
    }, 0) * 20;

  const navigate = useNavigate();

  const moveMain = () => {
    quizInit();
    userInit();
    navigate('/');
  };
  // 확인 -> 메인페이지 (회원 초기화, 퀴즈 초기화)
  // 퀴즈 이어서 풀기 (not updated yet) -> 이름 유지
  // 퀴즈 다시 풀기 (not updated yet)
  return (
    <div>
      <h1>
        {thisUser.name}님의 점수는 {score}점입니다!
      </h1>
      <button onClick={moveMain}>확인</button>
    </div>
  );
};

export default Main;
