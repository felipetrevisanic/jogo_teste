import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// 1 - configurando router

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './routes/Home';
import Login from './routes/Login';
import ErrorPage from './routes/Error';
import Resultados from './routes/Resultados'
import Jogo from './routes/Jogo';
import CadastraTeste from './routes/CadastraTeste';
import CadastraPergunta from './routes/CadastraPergunta';
import Teste from './routes/Teste';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: '/resultados',
        element: <Resultados/>
      },
      {
        path: '/teste',
        element: <Jogo/>
      },
      {
        path: '/teste/:id',
        element: <Teste/>
      },
      {
        path: '/cadastra-teste',
        element: <CadastraTeste/>
      },
      {
        path: '/cadastra-pergunta/:_id',
        element: <CadastraPergunta/>
      },
      {
        // path: '/seleciona-teste',
        // element: <SelecionaTeste/>
      },
      
      
    ]
  },
  // 5 - nested routes
])

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
