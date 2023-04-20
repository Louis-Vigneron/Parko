import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/normalize.css';
import './Styles/Main.css';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Book from './Pages/Book';
import Release from './Pages/Release';
import Disclaimer from './Pages/Disclaimer';
import ConfirmationBook from './Pages/ConfirmationBook';
import ConfirmationRelease from './Pages/ConfirmationRelease';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import carsReducer from './Components/Redux/reducer';

const store = createStore(
  carsReducer,
  applyMiddleware(thunkMiddleware)
);

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
  },
  {
    path: "/ConfirmationRéservation/:id?",
    element: <ConfirmationBook />,
  },
  {
    path: "/ConfirmationLibération/:id?",
    element: <ConfirmationRelease />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
