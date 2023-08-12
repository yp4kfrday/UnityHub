import { Header } from '../../components/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../AuthPage/HomePage';
import LoginPage from '../AuthPage/LoginPage';
import RegisterPage from '../AuthPage/RegisterPage';
import { Todo } from '../../components/Todo';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
      </Routes>
    </div>
  );
}

export { App };
