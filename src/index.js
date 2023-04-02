import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import './index.css';
import theme from './style/generalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.white}>
      <BrowserRouter basename="/project-fullstack-frontend">        
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
