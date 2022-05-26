// configStore.js
import { createStore, combineReducers } from 'redux';
import quiz from './modules/quiz';
import user from './modules/user';

// reducer 묶어주기
// store는 총 1개, riducer의 개수는 제한이 없다.
const rootReducer = combineReducers({ quiz, user });
const store = createStore(rootReducer);

export default store;
