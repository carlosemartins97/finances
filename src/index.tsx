import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from './core/hooks/theme';
import { AuthProvider } from './core/hooks/auth';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


