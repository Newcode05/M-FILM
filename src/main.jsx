import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App} from "./App.jsx"

import { AuthProvider } from './Providers/Context/AuthContext.jsx'
import { LoadingProvider } from './Providers/Context/LoadingContext.jsx'
import { LogInProvider } from './Providers/Context/LoginContext.jsx'
import { DeviceProvider } from './Providers/Context/DeviceContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <LogInProvider>
        <DeviceProvider>
          <LoadingProvider>

            <App />

          </LoadingProvider>
        </DeviceProvider>
      </LogInProvider>
    </AuthProvider>

  </StrictMode>
)
