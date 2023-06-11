import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router.jsx';
import AuthProvider from './Providers/Authpovider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <div className='max-w-7xl mx-auto mt-4'>
   <RouterProvider router={router} />
   </div>
    </QueryClientProvider>
  </AuthProvider>
  </React.StrictMode>,
)
