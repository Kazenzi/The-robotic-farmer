import { Buffer } from 'buffer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiProvider } from 'wagmi';

import App from './App.tsx';
import { config } from './wagmi.ts';

// Import your existing CSS files
import './style.css';      // Main stylesheet
import './bootstrap.css';  // Bootstrap styles
import './style.scss';     // SCSS styles

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

// Render the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
