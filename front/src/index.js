import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/normalize.css';
import './Styles/Main.css';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Book from './Pages/Book';
import Release from './Pages/Release';
import Disclaimer from './Pages/Disclaimer';

import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Réserver-ma-place",
    element: <Book />,
  },
  {
    path: "/Libérer-ma-place",
    element: <Release />,
  },
  {
    path: "/Disclaimer",
    element: <Disclaimer />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
