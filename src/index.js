import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
///import { TicketApp } from './TicketApp';

import { AppRouter } from './pages/router';
import { UiProvider } from './context/UiContext';
import { SocketProvider } from './context/SocketContext';
import { RouterPages } from './pages/RouterPages';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SocketProvider>
    <UiProvider>
      <AppRouter>
        <RouterPages />
      </AppRouter>
    </UiProvider>
    </SocketProvider>
  </React.StrictMode>,
)
