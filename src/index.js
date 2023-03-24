import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/auth/Login';
import SignUp from './views/auth/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path='Login' element={<Login />}></Route>
          <Route path='SignUp' element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
