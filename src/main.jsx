import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './Router/Router.jsx'
import './index.css'
import AuthProvider from './components/Auth/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <Toaster></Toaster>
         <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
         </QueryClientProvider>
      </AuthProvider>
  </StrictMode>,
)
