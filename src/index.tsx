import React from 'react';
import ReactDOM from 'react-dom/client';
import './services/i18n';
import App from './components/App';
import './index.scss';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
