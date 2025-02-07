import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            {routes.map(
                (route, index) => (
                      <li key={index}>
                        <Link to={route.path}>
                          {route.path === '/' ? 'Home' : route.path.slice(1)}
                        </Link>
                      </li>
              ))}
          </ul>
        </nav>

        <Routes>
        {routes.map((route, index) => {
            console.log(`Processing route ${index}: ${route.path}`);
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
