import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpContainer from './containers/SignUpContainer';

function App() {
  return (
    <div className="App h-100">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
