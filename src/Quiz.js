import { useNavigate, useParams } from 'react-router-dom';
import { quizUpdate } from './redux/modules/quiz';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Main = () => {
  const { quizId, quizNum } = useParams();
  const quizInfo = useSelector(state => state.quiz);
  const thisQuiz = quizInfo[quizId];
  // navigate 할때 quizNum 값 증가시켜서 보내기
  // 정답 고르면 그 값 적용하도록 quize update 하기

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkAnswer = event => {
    const solution = Boolean(event.target.dataset.answer);
    dispatch(quizUpdate(quizId, solution));
    const nextQuizNum = Number(quizNum) + 1;

    if (nextQuizNum > 4) {
      navigate(`/result/${quizId}`);
      return;
    }

    // 존재하지 않은 퀴즈 number 입력시 에러 페이지 이동
    // if (nextQuizNum < -) {

    // };
    navigate(`/quiz/${quizId}/${nextQuizNum}`);
  };

  return (
    <div>
      <h1>{Number(quizNum) + 1}번 문제</h1>
      <h1>{thisQuiz.quiz[quizNum]}</h1>
      <AnswerContainer>
        <Answer onClick={checkAnswer} data-answer={true}></Answer>
        <Answer onClick={checkAnswer} data-answer={false}></Answer>
      </AnswerContainer>
    </div>
  );
};

const AnswerContainer = styled.div`
  display: flex;
`;
const Answer = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  background-color: blue;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export default Main;
