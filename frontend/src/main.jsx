import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth0Provider
    domain="dev-yc4z8u55kz4uyg53.us.auth0.com" 
    clientId="bYI9PaX7q6vSTVa0OGghzkksfBrrDbsh"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
   >
    <App />
  </Auth0Provider>
  </React.StrictMode>
)