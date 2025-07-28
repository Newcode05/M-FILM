import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { App } from "./App.jsx"

import { AuthProvider } from './Providers/Context/AuthContext.jsx'
import { LoadingProvider } from './Providers/Context/LoadingContext.jsx'
import { LogInProvider } from './Providers/Context/LoginContext.jsx'
import { DeviceProvider } from './Providers/Context/DeviceContext.jsx'

import i18n from './i18n/index.js'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LogInProvider>
          <DeviceProvider>
            <LoadingProvider>

              <App />

            </LoadingProvider>
          </DeviceProvider>
        </LogInProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
