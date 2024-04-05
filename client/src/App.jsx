
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import UserPage from './pages/userPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path='/user' element={<UserPage />} />

      </Routes>
    </Router>
  );
}

