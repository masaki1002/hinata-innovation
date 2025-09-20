import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next' //追記
import i18n from './i18n'; //追記


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
   </I18nextProvider>
);

