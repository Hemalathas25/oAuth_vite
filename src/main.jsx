import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID = "692581892963-lnf27prcign4n8vaee56iranha67amfs.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>

  </StrictMode>,
)
