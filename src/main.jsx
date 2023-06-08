import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router.jsx';
import AuthProvider from './Providers/Authpovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <div className='max-w-7xl mx-auto mt-4'>
   <RouterProvider router={router} />
   </div>
  </AuthProvider>
  </React.StrictMode>,
)
