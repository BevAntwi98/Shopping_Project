import React from 'react';
import ReactDOM from 'react-dom';
import './Design/index.css';
import App from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <App />  
  </React.StrictMode>,
  document.getElementById('root')
);
