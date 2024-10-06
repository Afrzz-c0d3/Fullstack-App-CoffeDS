import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Homepage from './pages/homepage';
import ForgotPw from './pages/forgotPw';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPw />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
