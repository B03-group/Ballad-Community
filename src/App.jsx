import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegister from './components/auth/LoginRegister';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth">Login/Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<LoginRegister />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
