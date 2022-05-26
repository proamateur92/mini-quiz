// Actions
const INIT = 'user/INIT';
const CREATE = 'user/CREATE';

const initialData = { name: '', solveNum: [] };
// Reducer
export default function reducer(state = initialData, action = {}) {
  switch (action.type) {
    case 'user/INIT': {
      return initialData;
    }
    case 'user/CREATE': {
      return { name: action.userName, solveNum: [...state.solveNum, action.quizNum] };
    }
    // do reducer stuff
    default:
      return state;
  }
}

export function userInit() {
  return { type: INIT };
}

export function userCreate(userName, quizNum) {
  return { type: CREATE, userName, quizNum };
}

// export function updateUser(widget) {
//   return { type: UPDATE, widget };
// }
