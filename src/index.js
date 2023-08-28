import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Posts } from './components/posts/posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Posts />
  </React.StrictMode>
);

