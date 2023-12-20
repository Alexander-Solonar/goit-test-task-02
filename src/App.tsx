import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Tweets from './pages/tweets/Tweets';
import './App.css';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tweets" element={<Tweets />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
