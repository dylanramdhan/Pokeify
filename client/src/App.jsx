
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

