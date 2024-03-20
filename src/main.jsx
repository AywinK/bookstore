import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { BasketContextProvider } from './contexts/BasketContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BasketContextProvider>
  </React.StrictMode>,
)
