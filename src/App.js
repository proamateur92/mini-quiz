import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { Provider } from 'react-redux';
import store from './redux/configStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/quiz/:quizId/:quizNum' element={<Quiz />} />
          <Route path='/result/:quizId' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
