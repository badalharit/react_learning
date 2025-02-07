import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
          {routes.map(
              (route) => (
                  <Link to={route.path}>
                    <button>{route.path === '/' ? 'Home' : route.path.slice(1)}</button>
                  </Link>
            ))}

        <Routes>
        {routes.map((route, index) => {
            console.log(`Processing route ${index}: ${route.path}`);
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
