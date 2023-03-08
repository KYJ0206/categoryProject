import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NotPound from './Pages/NotPound';
import Home from './Pages/Home';
import Detail from './Pages/Detail';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotPound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },  
      { path: 'home/click/:id', element: <Detail /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();