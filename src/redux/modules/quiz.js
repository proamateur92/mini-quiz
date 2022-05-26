// quiz.js

// 문제를 풀면 해당 퀴즈의 userAnswer 값 추가
// 이름이 유지되는 동안문제를 전부 풀면 해당 퀴즈 배열 요소 삭제
// 이름이 바뀌거나 새로 시작을 누르면 배열 재생성

// Actions
const INIT = 'quiz/INIT';
// const REMOVE = 'quiz/REMOVE';
const UPDATE = 'quiz/UPDATE';

const initData = [
  { num: 0, quiz: ['이름은?', '얼굴은?', '주소는?', '..?', 'ㅇㅇ?'], answer: [true, true, false, false, true], userAnswer: [] },
  { num: 1, quiz: ['이름1111은?', '얼1111굴은?', '1111주소는?', '.111.?', 'ㅇㅇ1111?'], answer: [true, false, false, false, true], userAnswer: [] },
];

// Reducer
export default function reducer(state = initData, action = {}) {
  switch (action.type) {
    case 'quiz/INIT': {
      return initData;
    }

    case 'quiz/UPDATE': {
      const updateQuiz = state.map(v => (v.num === Number(action.quizId) ? { ...v, userAnswer: [...v.userAnswer, action.solution] } : v));
      return updateQuiz;
    }

    default:
      return state;
  }
}

export function quizInit() {
  return { type: INIT };
}

export function quizUpdate(quizId, solution) {
  return { type: UPDATE, quizId, solution };
}
