import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="app-container">
      <App />
    </div>
  </React.StrictMode>
);

