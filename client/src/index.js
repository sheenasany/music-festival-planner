import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
// import { UserProvider } from './GlobalContext/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <UserProvider>
  <BrowserRouter>
    <App />
  {/* // </UserProvider> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
