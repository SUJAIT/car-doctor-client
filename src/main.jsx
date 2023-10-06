import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import CreateContext from './AuthContext/AuthContext';
import router from './Router/Router';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <CreateContext>
         <RouterProvider router={router} />
      </CreateContext>
   
  </React.StrictMode></div>

,
)
